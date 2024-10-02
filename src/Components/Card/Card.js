import React, { useEffect, useState } from 'react'
import Nopriority from '../../Assets/icons/No-priority.svg'
import Lowpriority from '../../Assets/icons/Img - Low Priority.svg'
import Mediumpriority from '../../Assets/icons/Img - Medium Priority.svg'
import Highpriority from '../../Assets/icons/Img - High Priority.svg'
import Urgentprioritygrey from '../../Assets/icons/SVG - Urgent Priority grey.svg'
import './Card.css'

export default function Card(props) {
    const title = props.cardDetails.title.split(' ').slice(0, 9).join(' ')

    const [bgColor, setBgColor] = useState('#b06e0c');

    useEffect(() => {
        const randomColor = () => {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        };

        setBgColor(randomColor());
    }, []);

    return (
        <>
            <div className="card-container">
                <div className="card-id-wrapper">
                    <div className="card-id">{props.cardDetails.id}</div>
                    {props.group !== "user" ? (
                    <div className="card-profile" style={{ backgroundColor: bgColor }}>
                        <div className="card-profile-initial">{props.cardDetails.userObj.name[0]}{props.cardDetails.userObj.name[1]}</div>
                        <div className={props.cardDetails.userObj.available ? "card-profile-initial-available card-profile-initial-available-true" : "card-profile-initial-available"}></div>
                    </div>
                ) : null}
                </div>
                <div className="card-title">
                    {title.length < props.cardDetails.title.length ? `${title}...` : props.cardDetails.title}
                </div>
                <div className="card-tag">
                    {
                        {
                            0: props.group !== "priority" ? (<div className="card-tag-icon"><img src={Nopriority} alt="icon" /></div>
                            ) : null,
                            1: props.group !== "priority" ? (<div className="card-tag-icon"><img src={Lowpriority} alt="icon" /></div>
                            ) : null,
                            2: props.group !== "priority" ? (<div className="card-tag-icon"><img src={Mediumpriority} alt="icon" /></div>
                            ) : null,
                            3: props.group !== "priority" ? (<div className="card-tag-icon"><img src={Highpriority} alt="icon" /></div>
                            ) : null,
                            4: props.group !== "priority" ? (<div className="card-tag-icon"><img src={Urgentprioritygrey} alt="icon" /></div>
                            ) : null
                        }[props.cardDetails.priority]
                    }

                    {
                        props.cardDetails.tag.map((tag) => {
                            return (
                                <div className="card-tag-box">
                                    <div className="card-tag-title">{tag}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
