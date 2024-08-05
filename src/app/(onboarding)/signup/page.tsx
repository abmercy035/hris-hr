"use client"
import React from "react";
import styles from "@/styles/signup.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import FormGroup from "@/app/components/FormGroup";
export default function Page() {
    const router = useRouter();

    const signupFunc = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        router.push("/dashboard")
    }

    return <div className={styles.form_container}>
        <div className={styles.form_title}> Register</div>
        <form className={`${styles.form} ${styles.sign_in_form}`} onSubmit={signupFunc}>
            <FormGroup inputCls={`${styles.form_input} ${styles.req_input}`} label="Full name" type="text" id="full_name" styles={styles} required pl={undefined} value={undefined} min={undefined} max={undefined} />
            <FormGroup inputCls={`${styles.form_input} ${styles.req_input}`} label="Email" type="email" id="email" styles={styles} required pl={undefined} value={undefined} min={undefined} max={undefined} />
            <FormGroup inputCls={`${styles.form_input} ${styles.req_input}`} label="Phone" type="tel" id="mobile" styles={styles} required pl={undefined} value={undefined} min={undefined} max={undefined} />
            <FormGroup inputCls={`${styles.form_input} ${styles.req_input}`} label="Password" type="password" id="password" styles={styles} required pl={undefined} value={undefined} min={undefined} max={undefined} />
            <div className={styles.form_bottom}>
                <div className={styles.form_bottom_top}>
                    <div className={styles.form_bottom_left}>
                        <input id="checkbox" type="checkbox" className={styles.form_checkbox} required />
                        <label htmlFor="checkbox" className={`${styles.form_label} ${styles.req_label}`}>Remember me</label></div>
                    <div className={styles.form_bottom_right}><span className={styles.form_forgot_password}>Forgot Password?</span></div>
                </div>
                <input className={styles.form_button} type="submit" value="Sign in" />
            </div>
        </form>
    </div>
}
