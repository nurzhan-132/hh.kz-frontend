export default function MyResume({item}) {
    return(
        <div className="card mtb5">
            <a href="" className="h3">{item.position}</a>
            <p>{item.createdAt}</p>
            <h3>Статистика</h3>
            <div className="flex">
                <a href="">{0} показов</a>
                <a href="">{0} просмотров</a>
                <a href="">{0} приглашений</a>
            </div>
        </div>
    );
}