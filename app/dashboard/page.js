import { getTodos } from "@/lib/api";
import styles from "./Dashboard.module.css";

export default async function Dashboard() {
    const response = await getTodos();

    return (
        <table className={styles.tableContainer}>
            <thead>

                <tr>
                    <th>Task ID</th>
                    <th>Title</th>
                    <th>Status</th>
                </tr>
            </thead>

            <tbody>
                {
                    response.map((todo, index) => {
                        return (
                            <tr key={index}>
                                <td>{todo.id}</td>
                                <td>{todo.title}</td>
                                <td>{todo.completed ? "Completed" : "Not Completed"}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}
