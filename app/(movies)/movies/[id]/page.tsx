export default function MovieDetail({
    params: {id},
}: {
    params: {id: string};
}) {
    return (
        <div>
            <h1>Movie Detail</h1>
            <p>Movie ID: {id}</p>
        </div>
    )
}