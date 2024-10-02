import React, { useEffect, useState } from 'react'
import Backlog from '../../Assets/icons/Backlog.svg'
import Todo from '../../Assets/icons/To-do.svg'
import Inprogress from '../../Assets/icons/in-progress.svg'
import Done from '../../Assets/icons/Done.svg'
import Cancelled from '../../Assets/icons/Cancelled.svg'
import Nopriority from '../../Assets/icons/No-priority.svg'
import Lowpriority from '../../Assets/icons/Img - Low Priority.svg'
import Mediumpriority from '../../Assets/icons/Img - Medium Priority.svg'
import Highpriority from '../../Assets/icons/Img - High Priority.svg'
import Urgentpriority from '../../Assets/icons/SVG - Urgent Priority colour.svg'
import Add from '../../Assets/icons/add.svg'
import Threedot from '../../Assets/icons/3 dot menu.svg'
import './List.css'
import '../Card/Card.css'
import Card from '../Card/Card'

let cardCount = 0;

export default function List(props) {

    const filteredTickets = props.ticketDetails.filter(ticket => 
        ticket.status === props.listTitle || 
        ticket.priority === props.listTitle || 
        ticket.userObj.name === props.listTitle
    );
    
    cardCount = filteredTickets.length;
    
    filteredTickets.map(ticket => (
        <Card cardDetails={ticket} group={props.groupValue} />
    ));


    console.log(props);

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
            <div className="list-container">
                <div className="list-header">
                    <div className="list-header-left">
                        {
                            {
                                'status': <>{
                                    {
                                        'Backlog': <div className="list-icon">
                                            <img src={Backlog} alt="icon" />
                                        </div>,
                                        'Todo': <div className="list-icon">
                                            <img src={Todo} alt="icon" />
                                        </div>,
                                        'In progress': <div className="list-icon">
                                            <img src={Inprogress} alt="icon" />
                                        </div>,
                                        'Done': <div className="list-icon">
                                            <img src={Done} alt="icon" />
                                        </div>,
                                        'Cancelled': <div className="list-icon">
                                            <img src={Cancelled} alt="icon" />
                                        </div>
                                    }[props.listTitle]
                                } </>,
                                'user': <>
                                    {
                                        {
                                            'Anoop sharma':
                                                <div className='card-pfp-wrapper'>
                                                    <div className="card-profile2" style={{ backgroundColor: bgColor }}>
                                                        <div className="card-profile-initial">AS</div>
                                                        <div className="card-profile-initial-available"></div>
                                                    </div></div>,
                                            'Yogesh':
                                                <div className='card-pfp-wrapper'>
                                                    <div className="card-profile2" style={{ backgroundColor: bgColor }}>
                                                        <div className="card-profile-initial">YO</div>
                                                        <div className="card-profile-initial-available card-profile-initial-available-true"></div>
                                                    </div></div>,
                                            'Shankar Kumar':
                                                <div className='card-pfp-wrapper'>
                                                    <div className="card-profile2" style={{ backgroundColor: bgColor }}>
                                                        <div className="card-profile-initial">SK</div>
                                                        <div className="card-profile-initial-available card-profile-initial-available-true"></div>
                                                    </div></div>,
                                            'Ramesh':
                                                <div className='card-pfp-wrapper'>
                                                    <div className="card-profile2" style={{ backgroundColor: bgColor }}>
                                                        <div className="card-profile-initial">RA</div>
                                                        <div className="card-profile-initial-available card-profile-initial-available-true"></div>
                                                    </div></div>,
                                            'Suresh':
                                                <div className='card-pfp-wrapper'>
                                                    <div className="card-profile2" style={{ backgroundColor: bgColor }}>
                                                        <div className="card-profile-initial">SU</div>
                                                        <div className="card-profile-initial-available card-profile-initial-available-true"></div>
                                                    </div></div>,
                                        }[props.listTitle]
                                    }
                                </>,
                                'priority': <>{
                                    {
                                        0: <div className="card-tag-icon"><img src={Nopriority} alt="icon" /></div>,
                                        1: <div className="card-tag-icon"><img src={Lowpriority} alt="icon" /></div>,
                                        2: <div className="card-tag-icon"><img src={Mediumpriority} alt="icon" /></div>,
                                        3: <div className="card-tag-icon"><img src={Highpriority} alt="icon" /></div>,
                                        4: <div className="card-tag-icon"><img src={Urgentpriority} alt="icon" /></div>
                                    }[props.listTitle]
                                } </>
                            }[props.groupValue]
                        }

                        <div className="list-title">
                            {
                                {
                                    'priority': <>{
                                        props.priorityList
                                            ? props.priorityList.map(priorityProperty => (
                                                priorityProperty.priority === props.listTitle
                                                    ? <>{priorityProperty.name}</>
                                                    : null
                                            ))
                                            : null
                                    }</>,
                                    'status': <>{props.listTitle}</>,
                                    'user': <>{props.listTitle}</>
                                }[props.groupValue]
                            }
                        </div>
                        <div className="list-sum">{cardCount}</div>
                    </div>
                    <div className="list-header-right">
                        <div className="list-add-item">
                            <img src={Add} alt="icon" />
                        </div>
                        <div className="list-option-item">
                            <img src={Threedot} alt="icon" />
                        </div>
                    </div>
                </div>

                <div className="list-card-items">
                    {
                        props.ticketDetails.map(ticket => {
                            if (ticket.status === props.listTitle) {
                                cardCount++;
                                return (<Card cardDetails={ticket} group={props.groupValue} />)
                            }
                            else if (ticket.priority === props.listTitle) {
                                cardCount++;
                                return (<Card cardDetails={ticket} group={props.groupValue} />)
                            }
                            else if (ticket.userObj.name === props.listTitle) {
                                cardCount++;
                                return (<Card cardDetails={ticket} group={props.groupValue} />)
                            }
                            return null
                        }, cardCount = 0)

                    }
                </div>
            </div >
        </>
    )
}