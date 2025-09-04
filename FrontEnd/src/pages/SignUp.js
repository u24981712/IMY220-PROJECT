import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Button1 from "../components/Button1"
import { Link, useNavigate } from 'react-router-dom';


const SignUp = () => {

    const profileImages = [
        "https://api.dicebear.com/9.x/adventurer/svg?seed=Alexander",
        "https://api.dicebear.com/9.x/adventurer/svg?seed=Jocelyn",
        "https://api.dicebear.com/9.x/adventurer/svg?seed=Sawyer",
        "https://api.dicebear.com/9.x/adventurer/svg?seed=Luis",
        "https://api.dicebear.com/9.x/adventurer/svg?seed=Brian",
        "https://api.dicebear.com/9.x/adventurer/svg?seed=Kingston",
        "https://api.dicebear.com/9.x/adventurer/svg?seed=Sophia",
        "https://api.dicebear.com/9.x/adventurer/svg?seed=Ryker",
        "https://api.dicebear.com/9.x/adventurer/svg?seed=Caleb",
        "https://api.dicebear.com/9.x/adventurer/svg?seed=Mason",
    ]
    const randomIndex = Math.floor(Math.random() * 10);

    const [newUser, setNewUser] = useState({
        "name": "",
        "surname": "",
        "email": "",
        "password": "",
        "confirmpassword": "",
        "bio": "",
        "profileImage": profileImages[randomIndex],
        "friends": [],
        "skills": {
            "programmingLanguages": [],
            "technologies": []
        }
    });

    useEffect(() => {

        fetch('http://localhost:8000/getEmails')
            .then(res => {
                return res.json();
            }).then(data => {
                setCodeXUsers(data);
            })
    }, [])

    const [CodeXUsers, setCodeXUsers] = useState([]);

    const [passwordMatch, setPasswordMatch] = useState(false);

    const [passwordCharacter, setPasswordCharacter] = useState(false);

    const [passwordLength, setPasswordLength] = useState(false);

    const [passwordEmpty, setPasswordEmpty] = useState(false);
    
    const [userExists, setUserExists] = useState(false);

    const userVerification = () => {

        const exists = CodeXUsers.includes(newUser.email);

        if (exists) {

            setUserExists(true)

        } else {

            passwordVerification();
            setUserExists(false)

            // console.log("Exists", exists)
        }

    }

    const passwordVerification = () => {
        // console.log("Password: ", newUser.password)
        // console.log("Confirm Password: ", newUser.confirmpassword)
        const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`]/;

        if (newUser.password.length === 0) {

            setPasswordEmpty(true)
            setPasswordLength(false)
            setPasswordMatch(false)
            setPasswordCharacter(false);

            console.log("Passwords can't be empty");

        } else if (newUser.password.length <= 8) {

            setPasswordEmpty(false)
            setPasswordLength(true)
            setPasswordMatch(false)
            setPasswordCharacter(false);

            console.log("Password is Short");

        } else if (newUser.password !== newUser.confirmpassword) {

            setPasswordEmpty(false)
            setPasswordLength(false)
            setPasswordMatch(true)
            setPasswordCharacter(false);

            console.log("Passwords dont match");

        } else if (!specialChars.test(newUser.password)) {

            setPasswordEmpty(false)
            setPasswordLength(false)
            setPasswordMatch(false)
            setPasswordCharacter(true);

            console.log("Passwords doesn't have special character");
        } else {
            setPasswordEmpty(false)
            setPasswordLength(false)
            setPasswordMatch(false)
            setPasswordCharacter(false);

            handleSignUp();
        }
    }

    const navigate = useNavigate();

    const handleSignUp = () => {

        fetch('http://localhost:8000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser)
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Signup failed');
                }

                localStorage.setItem("username", newUser.email);

                localStorage.setItem("profileImage", newUser.profileImage);

                navigate('/home');

                return res.json();
            })
            .then(data => {
                console.log('User created:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });

    }

    const handleNewUserDataChange = (field, value) => {
        setNewUser(prevUser => ({
            ...prevUser,
            [field]: value
        }));
    };


    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <link rel="stylesheet" type="text/css" href="/assets/css/SignUp.css" />

            <div className="mesh-wrap" aria-hidden="true">
                <div className="mesh-layer layer-1"></div>
                <div className="mesh-layer layer-2"></div>
            </div>

            <div className='BackBTN'>
                <Link to="/">
                    <Button1 text={"Home"} style={"button3"} />
                </Link>
            </div>

            <div className="login-container">
                <h2 className="login-title">Create Account</h2>
                {/* <p className="login-subtitle">Join us today and get started</p> */}

                <div className="login-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                placeholder="Enter your first name"
                                required
                                value={newUser.name}
                                onChange={(e) => handleNewUserDataChange("name", e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                placeholder="Enter your last name"
                                required
                                value={newUser.surname}
                                onChange={(e) => handleNewUserDataChange("surname", e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                            value={newUser.email}
                            onChange={(e) => handleNewUserDataChange("email", e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                            value={newUser.password}
                            onChange={(e) => handleNewUserDataChange("password", e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Confirm your password"
                            required
                            value={newUser.confirmpassword}
                            onChange={(e) => handleNewUserDataChange("confirmpassword", e.target.value)}
                        />

                        <span onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            className="passwordInfo material-symbols-outlined">
                            info

                            {isHovered ?
                                <div className='passwordSuggest'>
                                    <h3>💡 Password Tips</h3>

                                    <div className='suggestion-item'>
                                        <span className='suggestion-icon'>🔤</span>
                                        <p><strong>Mix Cases:</strong> Use both uppercase (A-Z) and lowercase (a-z) letters</p>
                                    </div>

                                    <div className='suggestion-item'>
                                        <span className='suggestion-icon'>🔢</span>
                                        <p><strong>Add Numbers:</strong> Include at least one digit (0-9) for stronger security</p>
                                    </div>

                                    <div className='suggestion-item'>
                                        <span className='suggestion-icon'>🔣</span>
                                        <p><strong>Special Symbols:</strong> Use symbols like @, #, $, !, % to boost strength</p>
                                    </div>

                                    <div className='suggestion-item'>
                                        <span className='suggestion-icon'>📏</span>
                                        <p><strong>Length Matters:</strong> Aim for 8-20 characters - longer is stronger!</p>
                                    </div>

                                    <div className='example-passwords'>
                                        <p className='example-title'>✨ Good Examples:</p>
                                        <code>MySecure2024!</code> • <code>CodeX@Hero123</code> • <code>StrongPass$99</code>
                                    </div>
                                </div>
                                : ""
                            }
                        </span>
                    </div>


                    <div className='signUPErrrors'>

                        {passwordMatch ? <p className='passdontmatch'>Passwords Dont't Match</p> : ""}
                        {passwordCharacter ? <p className='passdontmatch'>Passwords Must Have Atleast One Special character</p> : ""}
                        {passwordLength ? <p className='passdontmatch'>Passwords Is Too Short</p> : ""}
                        {passwordEmpty ? <p className='passdontmatch'>Passwords Can Not Be Empty</p> : ""}
                        {userExists ? <p className='passdontmatch'>User Already Exist</p> : ""}

                    </div>


                    <button onClick={userVerification}
                        type="submit"
                        className="login-button"
                    >
                        Create Account
                    </button>
                </div>

                <div className="signup-prompt">
                    Already have an account? <Link to="/login" className="signup-link"> Sign in</Link>
                </div>
            </div>
        </>
    );
};

export default SignUp;
