import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import * as Markdown from 'react-markdown'

const BlogPost = ({ location: { state: { props } } }) => {
    const { fields } = props;
    const { content, icon, date, title } = fields;
    return (
        <React.Fragment>
            <nav className="level">
                <div className="level-left">
                    <Link className="level-item button is-small is-link is-outlined" to="/blog">Back to Blog</Link>
                </div>
                <div className="level-right">
                    <p className="level-item has-text-link is-size-7">    {moment(date).calendar(null, {
                        sameDay: '[Today]',
                        lastDay: '[Yesterday]',
                        lastWeek: '[Last] dddd',
                        sameElse: 'MMM Do YYYY'
                    })}
                    </p>
                </div>
            </nav>
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={icon} alt="Image" />
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <h1>{title}</h1>
                        <Markdown source={content} />
                    </div>
                </div>
            </article>
        </React.Fragment>
    )
}
export default BlogPost