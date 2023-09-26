export default function Myitem({item}) {
    return(
        <div className="card mtb5">
            <a href="" className="h3">{item.position}</a>
            <p>{item.createdAt}</p>
            <h3>Статистика</h3>
            <div className="flex">
                <a href="">{item.stats.show} показов</a>
                <a href="">{item.stats.views} просмотров</a>
                <a href="">{item.stats.applies} приглашений</a>
            </div>
        </div>
    );
}