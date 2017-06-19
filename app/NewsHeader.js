import React from 'react';
import imageLogo from './image/y18.gif';
import './css/NewsHeader.css';

export default class NewsHeader extends React.Component{
    render(){
        return (
            <div className='newsHeader'>
                {this.getLogo()}
                {this.getTitle()}
                {this.getNav()}
                {this.getlogin()}
            </div>
        );
    }
    getLogo(){
        return (
            <div className='newsHeader-logo'>
                <a href="https://news.ycombinator.com"><img src={imageLogo}/></a>
            </div>
        )
    }
    getTitle(){
        return (
            <div className='newsHeader-title'>
                <a className='newsHeader-textlink' href='https://news.ycombinator.com'>Hacker News</a>
            </div>
        )
    }
    getNav(){
        var navLinks=[
            {
                name:'new',
                url:'newest'
            },
            {
                name:'conments',
                url:'newconments'
            },
            {
                name:'show',
                url:'show'
            },
            {
                name:'ask',
                url:'ask'
            },
            {
                name:'jobs',
                url:'jobs'
            },
            {
                name:'submit',
                url:'submit'
            }
        ];

        return (
            <div className='newsHeader-nav'>
                {
                    navLinks.map(navLink=>{
                        return (
                            <a key={navLink.url} className='newsHeader-navLink newsHeader-textlink' href={'https://news.ycoml{navLink.name}'}>
                                {navLink.name}
                            </a>
                        )
                    })
                }
            </div>
        )
    }
    getlogin(){
        return (
            <div className='newsHeader-login'>
                <a className='newsHeader-textlink' href='https://news.ycombinator.com/login?goto=news'>login</a>
            </div>
        )
    }
}