import React from 'react'
import { Link } from 'react-router-dom'
import * as Markdown from 'react-markdown'
import moment from 'moment'

const BlogItem = (props) => {
    const { fields} = props;
    const { content, icon, path, date, title } = fields;
    return (
        <div className="box">
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={icon} alt="Image" />
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">

                        <h1>{title}</h1>
                        <Markdown source={content.split(" ").splice(0, 150).join(" ").concat('...')} />
                    </div>
                    <div className="level">
                        <div className="level-left">
                            <Link className="level-item button is-small is-link is-outlined"
                                to={{
                                    pathname: `/blog/${path}`,
                                    state: { fields }
                                }}
                            >
                                Read More
</Link>
                        </div>
                        <div className="level-right">
                            <p className="level-item has-text-link is-size-7">            {moment(date).calendar(null, {
                                sameDay: '[Today]',
                                lastDay: '[Yesterday]',
                                lastWeek: '[Last] dddd',
                                sameElse: 'MMM Do YYYY'
                            })}
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </div>)
}

export default BlogItem