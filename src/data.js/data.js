import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { Image } from 'react-bootstrap';

const TeamList = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [childrenData, setChildrenData] = useState([]);

    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const decodedToken = jwtDecode(token);
                const userId = decodedToken.userId;

                const response = await fetch(`http://localhost:5000/api/v3/userdetails/${userId}`, {
                    method: 'GET',
                    headers: {
                        Authorization: `${token}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const result = await response.json();
                    console.log(result);
                    setUserData(result);
                    setLoading(false);

                    if (result.user && result.user.children) {
                        const childrenIds = result.user.children;
                        fetchChildrenData(childrenIds);
                    }
                } else {
                    setError('Error fetching user data');
                    setLoading(false);
                }
            } catch (error) {
                setError('Error fetching user data');
                console.error(error);
            }
        };

        const fetchChildrenData = async (childrenIds) => {
            try {
                const promises = childrenIds.map(async (childId) => {
                    const response = await fetch(`http://localhost:5000/api/v3/userdetails/${childId}`, {
                        method: 'GET',
                        headers: {
                            Authorization: `${token}`,
                            'Content-Type': 'application/json',
                        },
                    });

                    if (response.ok) {
                        return response.json();
                    } else {
                        console.error('Error fetching child data:', response.statusText);
                        return null;
                    }
                });

                const childrenResults = await Promise.all(promises);
                setChildrenData(childrenResults.filter((data) => data !== null));
            } catch (error) {
                console.error('Error fetching children data:', error);
            }
        };

        fetchData();
    }, [token]);

    if (loading) {
        return (
            <Image
                src="https://cdn.pixabay.com/animation/2023/05/02/04/29/04-29-06-428_512.gif"
                style={{
                    textAlign: 'center',
                    justifyContent: 'center',
                    margin: 'auto',
                    padding: 'auto',
                }}
            />
        );
    }

    if (error) {
        return <p>Error: {error}</p>;
    }
    return (
        <div>
            <div>
                <h2>My Information</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">referral Pin</th>

                            <th scope="col">Name</th>
                            <th scope="col">Mobile Number</th>


                            {/* Add more user data fields as needed */}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>{userData.user.referralPin}</td>

                            <td>{userData.user.name}</td>
                            <td>{userData.user.mobileNumber}</td>
                            {/* Add more user data fields as needed */}
                        </tr>
                    </tbody>
                </table>
            </div>

            <div>
                <h2>My Team Details</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Mobile Number</th>
                            <th scope="col">Email</th>
                            {/* Add more children data fields as needed */}
                        </tr>
                    </thead>
                    <tbody>
                        {childrenData.map((child, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{child.user.name}</td>
                                <td>{child.user.referralPin}</td>
                                <td>{child.user.email}</td>
                                {/* Add more children data fields as needed */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

};

export default TeamList;
