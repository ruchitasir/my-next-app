import HEAD from 'next/head'


export default function Helloyellow(){

    return (
        <div>
            <HEAD>
                <title>My New NextJS App</title>
                <link rel="favicon" href="/favicon.ico" />
            </HEAD>
            <h1>Hello Yellow!</h1>
            <style jsx>
            {
                `h1{
                    color:pink;
                }`
            }
        </style>
        </div>
     
    )
}