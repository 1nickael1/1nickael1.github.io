import './style.scss'

export const Header = ({refs}) => {
    
    function scroll(ref) {
        ref.current.scrollIntoView({behavior: "smooth"});
    }

    return (
        <div className="header">
            <p className='title'>Portfólio</p>
            <div className="menu">
                <p onClick={() => scroll(refs[0])}>Home</p>
                <p onClick={() => scroll(refs[1])}>Sobre mim</p>
                <p onClick={() => scroll(refs[2])}>Experiência</p>
                {/* <p>Projetos</p> */}
            </div>
        </div>
    )
}