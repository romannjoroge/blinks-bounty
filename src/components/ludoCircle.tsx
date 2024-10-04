type LudoColors = "bg-ludo_blue" | "bg-ludo_red" | "bg-ludo_yellow" | "bg-ludo_green"
interface LudoCircleProps {
    color: string,
    number_coins: number
}

export default function LudoCircle(props: LudoCircleProps) {
    const { color, number_coins } = props;

    let coin_color_1 = "bg-white";
    let coin_color_2 = "bg-white";
    let coin_color_3 = "bg-white";
    let coin_color_4 = "bg-white";

    if (number_coins > 0) {
        if (number_coins >= 1) {
            coin_color_1 = color;
        }

        if (number_coins >= 2) {
            coin_color_2 = color;
        }

        if (number_coins >= 3) {
            coin_color_3 = color;
        }

        if (number_coins >= 4) {
            coin_color_4 = color
        }
    }

    return <div className={`rounded-full w-32 h-32 ${color} flex justify-center items-center m-8 border-black border-2`}>
        <div className="grid grid-cols-2 grid-rows-2 gap-5 w-20">
            <div className={`rounded-full w-7 h-7 border-2 border-black ${coin_color_1}`}></div>
            <div className={`rounded-full w-7 h-7 border-2 border-black ${coin_color_2}`}></div>
            <div className={`rounded-full w-7 h-7 border-2 border-black ${coin_color_3}`}></div>
            <div className={`rounded-full w-7 h-7 border-2 border-black ${coin_color_4}`}></div>
        </div>
    </div>
}