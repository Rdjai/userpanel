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
                const response = await fetch('http://localhost:5000/api/v3/childrenData', {
                    method: 'POST',
                    headers: {
                        Authorization: `${token}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ childrenIds }),
                });

                if (response.ok) {
                    const childrenData = await response.json();
                    console.log('Children Data:', childrenData);
                    setChildrenData(childrenData);
                } else {
                    console.error('Error fetching children data:', response.statusText);
                }
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
                <h2>User Data</h2>
                <p>Name: {userData.user.name}</p>
                <p>Mobile Number: {userData.user.mobileNumber}</p>
                <p>Email: {userData.user.email}</p>
                {/* Add more user data fields as needed */}
            </div>

            <div>
                <h2>Children Data</h2>
                {childrenData.map((child) => (
                    <div key={child._id}>
                        <p>Name: {child.name}</p>
                        <p>Mobile Number: {child.mobileNumber}</p>
                        <p>Email: {child.email}</p>
                        {/* Add more children data fields as needed */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamList;
