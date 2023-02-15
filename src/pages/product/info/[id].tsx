import { useRouter } from "next/router"

export default function Info() {

    const { query } = useRouter()

    return <h1>Page Products/Info: {query.id}</h1>
}