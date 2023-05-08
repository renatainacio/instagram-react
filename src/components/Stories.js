import Story from "./Story";

export default function Stories() {
    const items = [
        {
            src:"assets/img/9gag.svg",
            usuario:"9gag"
        },
        {
            src:"assets/img/meowed.svg",
            usuario:"meowed"
        },
        {
            src:"assets/img/barked.svg",
            usuario:"barked"
        },
        {
            src:"assets/img/nathanwpylestrangeplanet.svg",
            usuario:"nathanwpylestrangeplanet"
        },
        {
            src:"assets/img/wawawicomics.svg",
            usuario:"wawawicomics"
        },
        {
            src:"assets/img/respondeai.svg",
            usuario:"respondeai"
        },
        {
            src:"assets/img/filomoderna.svg",
            usuario:"filomoderna"
        },
        {
            src:"assets/img/memeriagourmet.svg",
            usuario:"memeriagourmet"
        }
    ]
    return(
        <div className="stories">
            {items.map((item) => 
            <Story
                key={item.usuario}
                src={item.src}
                usuario={item.usuario}
            />
            )}
            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}