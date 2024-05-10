import { cn } from "@nextui-org/react";

interface Props{
    items: {label: string}[]
    activeItem:number;
    setActiveItem: (index:number) => void;
    className?: string;
}

const Stepper = (props:Props) => {
    return (
        <div className={cn("flex items-center justify-around", props.className)}>
            {props.items.map((item, index)=> (
                <>
                <div>{index + 1}</div>
                <div>{item.label}</div>
                </>
            ))}
        </div>
    );
}

export default Stepper;