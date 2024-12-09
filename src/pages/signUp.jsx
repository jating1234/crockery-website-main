import React, { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth, db } from './firebase'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { setDoc, doc } from "firebase/firestore"
import 'react-toastify/dist/ReactToastify.css';
import { storage } from './firebase'
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

function signUp() {

    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [file, setFile] = useState(null)
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()


    const SubmitSignUpForm = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                Email,
                Password
            );
            const user = userCredential.user;

            const storageRef = ref(storage, `images/${Date.now() + Name}`)
            const UploadTask = uploadBytesResumable(storageRef, file)

            UploadTask.on(
                (err) => {
                    toast.err(err.message);
                },
                () => {
                    getDownloadURL(UploadTask.snapshot.ref).then(async (downloadURL) => {
                        await updateProfile(user, {
                            displayName: Name,
                            photoURL: downloadURL,
                        });

                        // store user data in firestore database
                        await setDoc(doc(db, "user", user.uid), {
                            uid: user.uid,
                            displayName: Name,
                            Email,
                            photoURL: downloadURL,
                        });
                    });
                }
            );
            setLoading(false)
            toast.success("Account registered successfully !!", {
                position: "top-right",
            });
            navigate("/")
        }

        catch (err) {

            setLoading(false)
            console.log(err.message);
            toast.error(err.message, {
                position: "bottom-center",
            });
        }
    }
    return (
        <div className='login-Signup'>
            <div className="flexcol login-signup-container">
                {
                    loading ? <h5>Loading....</h5>
                        :
                        <form action="" onSubmit={SubmitSignUpForm}>
                            <h2>SignUp</h2>

                            <div className="loginsignup-fields">
                                <label htmlFor="name">Enter Full Name</label>
                                <input type="text"
                                    id='name'
                                    placeholder='Your Name..'
                                    value={Name}
                                    onChange={(e) => setName(e.target.value)}
                                    autoComplete="off"
                                    required
                                />

                                <label htmlFor="email">Enter Email</label>
                                <input
                                    type="email"
                                    id='email'
                                    value={Email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder='Email Address..'
                                    autoComplete="off"
                                    required />


                                <label htmlFor="password">Enter Password</label>
                                <input
                                    type="password"
                                    id='password'
                                    placeholder='Password..'
                                    autoComplete="off"
                                    required
                                    value={Password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />

                                <div>
                                    <input
                                        type="file"
                                        id='choose-file'
                                        onChange={(e) => setFile(e.target.files[0])}
                                    />
                                </div>

                            </div>

                            <button className='button' type='submit'>Sign Up</button>
                            <p className="liginsignUp-login">Already Register  <Link to={"/login"}><span>Login here..</span></Link></p>
                            <div className="loginSignup-agree">
                                <input type="checkbox" name='' id='' />
                                <p style={{ color: "gray" }}>By continuing, i agree to the terms of privacy policy.</p>
                            </div>


                        </form>
                }
            </div>

        </div>
    )
}

export default signUp