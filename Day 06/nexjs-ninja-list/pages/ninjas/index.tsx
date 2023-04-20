import Link from "next/link";
import React from "react";
import style from '../../styles/Ninjas.module.css';

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return {
        props: { ninjas: data }
    };
}


const Ninjas: React.FC = ({ ninjas }: any) => {
    return (
        <>
            <h1>All Ninjas</h1>
            {ninjas.map((ninja: any) => (

                <Link href={'/ninjas/' + ninja.id} key={ninja.id} legacyBehavior>
                    <a className={style.single}>
                        <h3>{ninja.name}</h3>
                    </a>
                </Link>
            ))}
        </>
    )
}

export default Ninjas;