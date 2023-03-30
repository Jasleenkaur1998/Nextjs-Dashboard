import { getMyProfile } from '@/lib/api';
import React from 'react'
import styles from './Myprofile.module.css';

export default async function MyProfile() {
    const response = await getMyProfile();

    return (
        <form className={styles.myprofileForm}>
            <label htmlFor="name">Name</label>
            <input value={response.name} type="text" id="name" name="name" required />

            <label htmlFor="email">Email</label>
            <input value={response.email} type="email" id="email" name="email" required />

            <label htmlFor="email">Email</label>
            <input value={response.email} type="email" id="email" name="email" required />

            <fieldset>
                <legend>Address</legend>
                <label htmlFor="city">City</label>
                <input value={response.address.city} type="text" id="city" name="city" required />

                <label htmlFor="street">Street</label>
                <input value={response.address.city} type="text" id="street" name="street" required />
            </fieldset>

            <label htmlFor="companyName">Company Name</label>
            <input value={response.company.name} type="text" id="companyName" name="companyName" required />

            <button type="submit">Submit</button>
        </form>
    )
}
