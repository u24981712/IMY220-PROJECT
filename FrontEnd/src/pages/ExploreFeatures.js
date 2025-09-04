import React from "react"
import Button1 from "../components/Button1"
import { Link, useNavigate } from 'react-router-dom';


const ExploreFeatures = () => {

    const nav = useNavigate()

    const goBack = () =>{
        nav(-1);
    }

    return (
        <>
            <div className="mesh-wrap" aria-hidden="true">
                <div className="mesh-layer layer-1"></div>
                <div className="mesh-layer layer-2"></div>
                <div className="mesh-layer layer-3"></div>
                {/* <div className="mesh-layer layer-4"></div>
                <div className="mesh-layer layer-5"></div>
                <div className="mesh-layer layer-6"></div> */}
            </div>
            <div className='ShowFeatures'>
                <link rel="stylesheet" type="text/css" href="/assets/css/ExploreFeatures.css" />
                <div className="NavigateBTNS">
                    <Link to="/login">
                        <Button1 text="Sign In" style={"button3"} />
                    </Link>

                    <Link to="/signup">
                        <Button1 text="Sign Up" style={"button4"} />
                    </Link>

                    <div className="thirdBtn">
                        <Link>
                            <Button1 toggle={goBack}  text="Go Back" style={"button4"} />
                        </Link>
                    </div>
                </div>

                <div className="features-modal">
                    <div className="features-header">
                        <h2 className="features-title">Powerful Features</h2>
                        <p className="features-subtitle">Everything you need to build, collaborate, and deploy amazing projects</p>
                    </div>

                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">🚀</div>
                            <h3 className="feature-title">Real-Time Collaboration</h3>
                            <p className="feature-description">Work together seamlessly with live editing, instant sync, and team chat integration.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">🎨</div>
                            <h3 className="feature-title">Smart Syntax Highlighting</h3>
                            <p className="feature-description">Beautiful, intelligent code highlighting with support for 50+ programming languages.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">🔧</div>
                            <h3 className="feature-title">Advanced Debugging Tools</h3>
                            <p className="feature-description">Powerful debugging with breakpoints, variable inspection, and integrated terminal.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">⚡</div>
                            <h3 className="feature-title">One-Click Deployment</h3>
                            <p className="feature-description">Deploy to cloud platforms instantly with automated CI/CD pipelines and environment management.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">🎯</div>
                            <h3 className="feature-title">Project Discovery</h3>
                            <p className="feature-description">Explore and discover amazing projects from our community with smart filtering and trending recommendations.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">📱</div>
                            <h3 className="feature-title">Cross-Platform Support</h3>
                            <p className="feature-description">Build for web, mobile, and desktop from a single codebase with seamless integration.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">🔒</div>
                            <h3 className="feature-title">Security Analysis</h3>
                            <p className="feature-description">Built-in vulnerability scanning and security best practices enforcement.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">📊</div>
                            <h3 className="feature-title">Performance Analytics</h3>
                            <p className="feature-description">Monitor code performance, track metrics, and optimize your applications in real-time.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">🌐</div>
                            <h3 className="feature-title">Version Control Integration</h3>
                            <p className="feature-description">Seamless Git integration with visual diff, merge conflict resolution, and branch management.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default ExploreFeatures;