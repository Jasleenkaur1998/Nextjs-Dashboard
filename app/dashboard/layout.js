import Link from 'next/link';
import React from 'react';
import styles from './Dashboard.module.css';

export default function DashboardLayout({ children }) {
    return (
        <div className={styles.dashboardContainer}>
            <div className={styles.quickActionsContainer}>
                <Link href="/dashboard" className={styles.quickActions}>My Tasks</Link>
                <Link href="/dashboard/myprofile" className={styles.quickActions}>My Profile</Link>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}
