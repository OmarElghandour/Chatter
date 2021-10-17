import react from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    return (
        <section id="sidebar">
            <header>
                <img className="header__avatar" alt="" src='/images/David-Gandy.jpg' />
                <h3 className="header__username">Lorem ipsum dolor</h3>
            </header>
            <div className="sidebar__search-form">
                <span className="fas fa-search icon" />
                <input className="sidebar__search" type="text" placeholder="Search for conversation ..." />
            </div>
            <div className="button-group">
                <button className="btn btn-primary btn__group ">All</button>
                <button className="btn btn-primary btn__group">Favorite</button>
                <button className="btn btn-primary btn__group">Unread</button>
            </div>
            <div id="chats">
                <h1>Chats</h1>
                <div className="chat-item">
                    <img src="/images/istockphoto-1299360127-170667a.jpg" alt="" />
                    <div className="content">
                        <h5 className="chat__username">User Name</h5>
                        <p className="chat__last-message">Lorem, ipsum dolor sit amet ... </p>
                    </div>
                    <h3>Mon</h3>
                </div>
                <div className="chat-item">
                    <img src="/images/photo-1438761681033-6461ffad8d80.jpeg" alt="" />
                    <div className="content">
                        <h5 className="chat__username">User Name</h5>
                        <p className="chat__last-message">Lorem, ipsum dolor sit amet ... </p>
                    </div>
                    <h3>Mon</h3>
                </div>
                <div className="chat-item">
                    <img src="/images/David-Gandy.jpg" alt="" />
                    <div className="content">
                        <h5 className="chat__username">User Name</h5>
                        <p className="chat__last-message">Lorem, ipsum dolor sit amet ... </p>
                    </div>
                    <h3>Mon</h3>
                </div>
                <div className="chat-item">
                    <img src="/images/fresh-portrait-beautiful-young-model-man-black-t-shirt-street-near-wooden-pillar-fresh-portrait-beautiful-124719712.jpg" alt="" />
                    <div className="content">
                        <h5 className="chat__username">User Name</h5>
                        <p className="chat__last-message">Lorem, ipsum dolor sit amet ... </p>
                    </div>
                    <h3>Mon</h3>
                </div>
                <div className="chat-item">
                    <img src="/images/istockphoto-1299360127-170667a.jpg" alt="" />
                    <div className="content">
                        <h5 className="chat__username">User Name</h5>
                        <p className="chat__last-message">Lorem, ipsum dolor sit amet ... </p>
                    </div>
                    <h3>Mon</h3>
                </div>
                <div className="chat-item">
                    <img src="/images/photo-1438761681033-6461ffad8d80.jpeg" alt="" />
                    <div className="content">
                        <h5 className="chat__username">User Name</h5>
                        <p className="chat__last-message">Lorem, ipsum dolor sit amet ... </p>
                    </div>
                    <h3>Mon</h3>
                </div>
                <div className="chat-item">
                    <img src="/images/David-Gandy.jpg" alt="" />
                    <div className="content">
                        <h5 className="chat__username">User Name</h5>
                        <p className="chat__last-message">Lorem, ipsum dolor sit amet ... </p>
                    </div>
                    <h3>Mon</h3>
                </div>
                <div className="chat-item">
                    <img src="/images/fresh-portrait-beautiful-young-model-man-black-t-shirt-street-near-wooden-pillar-fresh-portrait-beautiful-124719712.jpg" alt="" />
                    <div className="content">
                        <h5 className="chat__username">User Name</h5>
                        <p className="chat__last-message">Lorem, ipsum dolor sit amet ... </p>
                    </div>
                    <h3>Mon</h3>
                </div>
                <div className="chat-item">
                    <img src="/images/istockphoto-1299360127-170667a.jpg" alt="" />
                    <div className="content">
                        <h5 className="chat__username">User Name</h5>
                        <p className="chat__last-message">Lorem, ipsum dolor sit amet ... </p>
                    </div>
                    <h3>Mon</h3>
                </div>
                <div className="chat-item">
                    <img src="/images/photo-1438761681033-6461ffad8d80.jpeg" alt="" />
                    <div className="content">
                        <h5 className="chat__username">User Name</h5>
                        <p className="chat__last-message">Lorem, ipsum dolor sit amet ... </p>
                    </div>
                    <h3>Mon</h3>
                </div>
                <div className="chat-item">
                    <img src="/images/David-Gandy.jpg" alt="" />
                    <div className="content">
                        <h5 className="chat__username">User Name</h5>
                        <p className="chat__last-message">Lorem, ipsum dolor sit amet ... </p>
                    </div>
                    <h3>Mon</h3>
                </div>
                <div className="chat-item">
                    <img src="/images/fresh-portrait-beautiful-young-model-man-black-t-shirt-street-near-wooden-pillar-fresh-portrait-beautiful-124719712.jpg" alt="" />
                    <div className="content">
                        <h5 className="chat__username">User Name</h5>
                        <p className="chat__last-message">Lorem, ipsum dolor sit amet ... </p>
                    </div>
                    <h3>Mon</h3>
                </div>
                <div className="chat-item">
                    <img src="/images/photo-1438761681033-6461ffad8d80.jpeg" alt="" />
                    <div className="content">
                        <h5 className="chat__username">User Name</h5>
                        <p className="chat__last-message">Lorem, ipsum dolor sit amet ... </p>
                    </div>
                    <h3>Mon</h3>
                </div>
                <div className="chat-item">
                    <img src="/images/David-Gandy.jpg" alt="" />
                    <div className="content">
                        <h5 className="chat__username">User Name</h5>
                        <p className="chat__last-message">Lorem, ipsum dolor sit amet ... </p>
                    </div>
                    <h3>Mon</h3>
                </div>
                <div className="chat-item">
                    <img src="/images/fresh-portrait-beautiful-young-model-man-black-t-shirt-street-near-wooden-pillar-fresh-portrait-beautiful-124719712.jpg" alt="" />
                    <div className="content">
                        <h5 className="chat__username">User Name</h5>
                        <p className="chat__last-message">Lorem, ipsum dolor sit amet ... </p>
                    </div>
                    <h3>Mon</h3>
                </div>
            </div>
        </section>)
}


export default Sidebar;