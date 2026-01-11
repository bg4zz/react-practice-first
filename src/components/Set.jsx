import {Card} from "./Card.jsx";
import {useState} from "react";
import cardsData from "../data.json"
import './Set.css'

export function Set() {
    const [step, setStep] = useState(0);
    const cards = cardsData;
    const total = cards.length;

    const goToPrev = () => {
        if(step > 0) {
            setStep(step - 1);
        }
    }

    const goToNext = () => {
        if(step < total - 1) {
            setStep(step + 1);
        }
    }

    return (
        <div className="set">
            <h2>Название набора</h2>
            <Card key={cards[step].id} front={cards[step]?.front} back={cards[step]?.back}/>
            <div className="btn-control">
                <button onClick={goToPrev} disabled={step === 0}>
                    left
                </button>
                <span>
                    {step + 1} / {total}
                </span>
                <button onClick={goToNext} disabled={step === total - 1}>
                    right
                </button>
            </div>
        </div>
    )
}