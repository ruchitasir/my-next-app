import HEAD from 'next/head'

export default function Hello(){

    return (
        <div>
             <HEAD>
                <title>My New NextJS App</title>
                <link rel="favicon" href="/favicon.ico" />
            </HEAD>
            <h1>Hello World!</h1>
            {/* <style jsx>
            {
                `h1{
                    color:blue;
                }`
            }
            </style> */}
        </div>
     
    )
}