import React from 'react'

const UiTheme = () => {
    return (
        <div className="ui-theme-settings">
            <button type="button" id="TooltipDemo" className="btn-open-options btn btn-warning">
                <i className="fa fa-cog fa-w-16 fa-spin fa-2x" />
            </button>
            <div className="theme-settings__inner">
                <div className="scrollbar-container">
                    <div className="theme-settings__options-wrapper">
                        <h3 className="themeoptions-heading">Layout Options</h3>
                        <div className="p-3">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <div className="widget-content p-0">
                                        <div className="widget-content-wrapper">
                                            <div className="widget-content-left mr-3">
                                                <div className="switch has-switch switch-container-class"
                                                    data-class="fixed-header">
                                                    <div className="switch-animate switch-on">
                                                        <input type="checkbox" defaultChecked="" data-toggle="toggle"
                                                            data-onstyle="success" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget-content-left">
                                                <div className="widget-heading">Fixed Header</div>
                                                <div className="widget-subheading">
                                                    Makes the header top fixed, always visible!
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="widget-content p-0">
                                        <div className="widget-content-wrapper">
                                            <div className="widget-content-left mr-3">
                                                <div className="switch has-switch switch-container-class"
                                                    data-class="fixed-sidebar">
                                                    <div className="switch-animate switch-on">
                                                        <input type="checkbox" defaultChecked="" data-toggle="toggle"
                                                            data-onstyle="success" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget-content-left">
                                                <div className="widget-heading">Fixed Sidebar</div>
                                                <div className="widget-subheading">
                                                    Makes the sidebar left fixed, always visible!
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="widget-content p-0">
                                        <div className="widget-content-wrapper">
                                            <div className="widget-content-left mr-3">
                                                <div className="switch has-switch switch-container-class"
                                                    data-class="fixed-footer">
                                                    <div className="switch-animate switch-off">
                                                        <input type="checkbox" data-toggle="toggle"
                                                            data-onstyle="success" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget-content-left">
                                                <div className="widget-heading">Fixed Footer</div>
                                                <div className="widget-subheading">
                                                    Makes the app footer bottom fixed, always visible!
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <h3 className="themeoptions-heading">
                            <div>Header Options</div>
                            <button type="button"
                                className="btn-pill btn-shadow btn-wide ml-auto btn btn-focus btn-sm switch-header-cs-class"
                                data-class="">
                                Restore Default
                            </button>
                        </h3>
                        <div className="p-3">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <h5 className="pb-2">Choose Color Scheme</h5>
                                    <div className="theme-settings-swatches">
                                        <div className="swatch-holder bg-primary switch-header-cs-class"
                                            data-class="bg-primary header-text-light"></div>
                                        <div className="swatch-holder bg-secondary switch-header-cs-class"
                                            data-class="bg-secondary header-text-light"></div>
                                        <div className="swatch-holder bg-success switch-header-cs-class"
                                            data-class="bg-success header-text-dark"></div>
                                        <div className="swatch-holder bg-info switch-header-cs-class"
                                            data-class="bg-info header-text-dark"></div>
                                        <div className="swatch-holder bg-warning switch-header-cs-class"
                                            data-class="bg-warning header-text-dark"></div>
                                        <div className="swatch-holder bg-danger switch-header-cs-class"
                                            data-class="bg-danger header-text-light"></div>
                                        <div className="swatch-holder bg-light switch-header-cs-class"
                                            data-class="bg-light header-text-dark"></div>
                                        <div className="swatch-holder bg-dark switch-header-cs-class"
                                            data-class="bg-dark header-text-light"></div>
                                        <div className="swatch-holder bg-focus switch-header-cs-class"
                                            data-class="bg-focus header-text-light"></div>
                                        <div className="swatch-holder bg-alternate switch-header-cs-class"
                                            data-class="bg-alternate header-text-light"></div>
                                        <div className="divider"></div>
                                        <div className="swatch-holder bg-vicious-stance switch-header-cs-class"
                                            data-class="bg-vicious-stance header-text-light"></div>
                                        <div className="swatch-holder bg-midnight-bloom switch-header-cs-class"
                                            data-class="bg-midnight-bloom header-text-light"></div>
                                        <div className="swatch-holder bg-night-sky switch-header-cs-class"
                                            data-class="bg-night-sky header-text-light"></div>
                                        <div className="swatch-holder bg-slick-carbon switch-header-cs-class"
                                            data-class="bg-slick-carbon header-text-light"></div>
                                        <div className="swatch-holder bg-asteroid switch-header-cs-class"
                                            data-class="bg-asteroid header-text-light"></div>
                                        <div className="swatch-holder bg-royal switch-header-cs-class"
                                            data-class="bg-royal header-text-light"></div>
                                        <div className="swatch-holder bg-warm-flame switch-header-cs-class"
                                            data-class="bg-warm-flame header-text-dark"></div>
                                        <div className="swatch-holder bg-night-fade switch-header-cs-class"
                                            data-class="bg-night-fade header-text-dark"></div>
                                        <div className="swatch-holder bg-sunny-morning switch-header-cs-class"
                                            data-class="bg-sunny-morning header-text-dark"></div>
                                        <div className="swatch-holder bg-tempting-azure switch-header-cs-class"
                                            data-class="bg-tempting-azure header-text-dark"></div>
                                        <div className="swatch-holder bg-amy-crisp switch-header-cs-class"
                                            data-class="bg-amy-crisp header-text-dark"></div>
                                        <div className="swatch-holder bg-heavy-rain switch-header-cs-class"
                                            data-class="bg-heavy-rain header-text-dark"></div>
                                        <div className="swatch-holder bg-mean-fruit switch-header-cs-class"
                                            data-class="bg-mean-fruit header-text-dark"></div>
                                        <div className="swatch-holder bg-malibu-beach switch-header-cs-class"
                                            data-class="bg-malibu-beach header-text-light"></div>
                                        <div className="swatch-holder bg-deep-blue switch-header-cs-class"
                                            data-class="bg-deep-blue header-text-dark"></div>
                                        <div className="swatch-holder bg-ripe-malin switch-header-cs-class"
                                            data-class="bg-ripe-malin header-text-light"></div>
                                        <div className="swatch-holder bg-arielle-smile switch-header-cs-class"
                                            data-class="bg-arielle-smile header-text-light"></div>
                                        <div className="swatch-holder bg-plum-plate switch-header-cs-class"
                                            data-class="bg-plum-plate header-text-light"></div>
                                        <div className="swatch-holder bg-happy-fisher switch-header-cs-class"
                                            data-class="bg-happy-fisher header-text-dark"></div>
                                        <div className="swatch-holder bg-happy-itmeo switch-header-cs-class"
                                            data-class="bg-happy-itmeo header-text-light"></div>
                                        <div className="swatch-holder bg-mixed-hopes switch-header-cs-class"
                                            data-class="bg-mixed-hopes header-text-light"></div>
                                        <div className="swatch-holder bg-strong-bliss switch-header-cs-class"
                                            data-class="bg-strong-bliss header-text-light"></div>
                                        <div className="swatch-holder bg-grow-early switch-header-cs-class"
                                            data-class="bg-grow-early header-text-light"></div>
                                        <div className="swatch-holder bg-love-kiss switch-header-cs-class"
                                            data-class="bg-love-kiss header-text-light"></div>
                                        <div className="swatch-holder bg-premium-dark switch-header-cs-class"
                                            data-class="bg-premium-dark header-text-light"></div>
                                        <div className="swatch-holder bg-happy-green switch-header-cs-class"
                                            data-class="bg-happy-green header-text-light"></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <h3 className="themeoptions-heading">
                            <div>Sidebar Options</div>
                            <button type="button"
                                className="btn-pill btn-shadow btn-wide ml-auto btn btn-focus btn-sm switch-sidebar-cs-class"
                                data-class="">
                                Restore Default
                            </button>
                        </h3>
                        <div className="p-3">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <h5 className="pb-2">Choose Color Scheme</h5>
                                    <div className="theme-settings-swatches">
                                        <div className="swatch-holder bg-primary switch-sidebar-cs-class"
                                            data-class="bg-primary sidebar-text-light"></div>
                                        <div className="swatch-holder bg-secondary switch-sidebar-cs-class"
                                            data-class="bg-secondary sidebar-text-light"></div>
                                        <div className="swatch-holder bg-success switch-sidebar-cs-class"
                                            data-class="bg-success sidebar-text-dark"></div>
                                        <div className="swatch-holder bg-info switch-sidebar-cs-class"
                                            data-class="bg-info sidebar-text-dark"></div>
                                        <div className="swatch-holder bg-warning switch-sidebar-cs-class"
                                            data-class="bg-warning sidebar-text-dark"></div>
                                        <div className="swatch-holder bg-danger switch-sidebar-cs-class"
                                            data-class="bg-danger sidebar-text-light"></div>
                                        <div className="swatch-holder bg-light switch-sidebar-cs-class"
                                            data-class="bg-light sidebar-text-dark"></div>
                                        <div className="swatch-holder bg-dark switch-sidebar-cs-class"
                                            data-class="bg-dark sidebar-text-light"></div>
                                        <div className="swatch-holder bg-focus switch-sidebar-cs-class"
                                            data-class="bg-focus sidebar-text-light"></div>
                                        <div className="swatch-holder bg-alternate switch-sidebar-cs-class"
                                            data-class="bg-alternate sidebar-text-light"></div>
                                        <div className="divider"></div>
                                        <div className="swatch-holder bg-vicious-stance switch-sidebar-cs-class"
                                            data-class="bg-vicious-stance sidebar-text-light"></div>
                                        <div className="swatch-holder bg-midnight-bloom switch-sidebar-cs-class"
                                            data-class="bg-midnight-bloom sidebar-text-light"></div>
                                        <div className="swatch-holder bg-night-sky switch-sidebar-cs-class"
                                            data-class="bg-night-sky sidebar-text-light"></div>
                                        <div className="swatch-holder bg-slick-carbon switch-sidebar-cs-class"
                                            data-class="bg-slick-carbon sidebar-text-light"></div>
                                        <div className="swatch-holder bg-asteroid switch-sidebar-cs-class"
                                            data-class="bg-asteroid sidebar-text-light"></div>
                                        <div className="swatch-holder bg-royal switch-sidebar-cs-class"
                                            data-class="bg-royal sidebar-text-light"></div>
                                        <div className="swatch-holder bg-warm-flame switch-sidebar-cs-class"
                                            data-class="bg-warm-flame sidebar-text-dark"></div>
                                        <div className="swatch-holder bg-night-fade switch-sidebar-cs-class"
                                            data-class="bg-night-fade sidebar-text-dark"></div>
                                        <div className="swatch-holder bg-sunny-morning switch-sidebar-cs-class"
                                            data-class="bg-sunny-morning sidebar-text-dark"></div>
                                        <div className="swatch-holder bg-tempting-azure switch-sidebar-cs-class"
                                            data-class="bg-tempting-azure sidebar-text-dark"></div>
                                        <div className="swatch-holder bg-amy-crisp switch-sidebar-cs-class"
                                            data-class="bg-amy-crisp sidebar-text-dark"></div>
                                        <div className="swatch-holder bg-heavy-rain switch-sidebar-cs-class"
                                            data-class="bg-heavy-rain sidebar-text-dark"></div>
                                        <div className="swatch-holder bg-mean-fruit switch-sidebar-cs-class"
                                            data-class="bg-mean-fruit sidebar-text-dark"></div>
                                        <div className="swatch-holder bg-malibu-beach switch-sidebar-cs-class"
                                            data-class="bg-malibu-beach sidebar-text-light"></div>
                                        <div className="swatch-holder bg-deep-blue switch-sidebar-cs-class"
                                            data-class="bg-deep-blue sidebar-text-dark"></div>
                                        <div className="swatch-holder bg-ripe-malin switch-sidebar-cs-class"
                                            data-class="bg-ripe-malin sidebar-text-light"></div>
                                        <div className="swatch-holder bg-arielle-smile switch-sidebar-cs-class"
                                            data-class="bg-arielle-smile sidebar-text-light"></div>
                                        <div className="swatch-holder bg-plum-plate switch-sidebar-cs-class"
                                            data-class="bg-plum-plate sidebar-text-light"></div>
                                        <div className="swatch-holder bg-happy-fisher switch-sidebar-cs-class"
                                            data-class="bg-happy-fisher sidebar-text-dark"></div>
                                        <div className="swatch-holder bg-happy-itmeo switch-sidebar-cs-class"
                                            data-class="bg-happy-itmeo sidebar-text-light"></div>
                                        <div className="swatch-holder bg-mixed-hopes switch-sidebar-cs-class"
                                            data-class="bg-mixed-hopes sidebar-text-light"></div>
                                        <div className="swatch-holder bg-strong-bliss switch-sidebar-cs-class"
                                            data-class="bg-strong-bliss sidebar-text-light"></div>
                                        <div className="swatch-holder bg-grow-early switch-sidebar-cs-class"
                                            data-class="bg-grow-early sidebar-text-light"></div>
                                        <div className="swatch-holder bg-love-kiss switch-sidebar-cs-class"
                                            data-class="bg-love-kiss sidebar-text-light"></div>
                                        <div className="swatch-holder bg-premium-dark switch-sidebar-cs-class"
                                            data-class="bg-premium-dark sidebar-text-light"></div>
                                        <div className="swatch-holder bg-happy-green switch-sidebar-cs-class"
                                            data-class="bg-happy-green sidebar-text-light"></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <h3 className="themeoptions-heading">
                            <div>Main Content Options</div>
                            <button type="button"
                                className="btn-pill btn-shadow btn-wide ml-auto active btn btn-focus btn-sm">
                                Restore Default
                            </button>
                        </h3>
                        <div className="p-3">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <h5 className="pb-2">Page Section Tabs</h5>
                                    <div className="theme-settings-swatches">
                                        <div role="group" className="mt-2 btn-group">
                                            <button type="button"
                                                className="btn-wide btn-shadow btn-primary btn btn-secondary switch-theme-class"
                                                data-class="body-tabs-line">
                                                Line
                                            </button>
                                            <button type="button"
                                                className="btn-wide btn-shadow btn-primary active btn btn-secondary switch-theme-class"
                                                data-class="body-tabs-shadow">
                                                Shadow
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UiTheme
