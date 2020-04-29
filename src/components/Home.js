import React, { Component } from 'react'
import pokeball from '../pokeball.png'
import {Link, NavLink } from 'react-router-dom'
import {connect} from 'react-redux'

class Home extends Component {

    /*state = {
        posts: []
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                console.log(res)
                this.setState({
                    posts: res.data.slice(0, 10)
                })
            })
    }*/

    render() {
        console.log(this.props)
        const {posts} = this.props
        const postsLink = posts.length ? (
            posts.map(post => {
                return (
                    <div className='post card' key={post.id}>
                    <img src = {pokeball}  alt = ' A pokeball'/>
                        <div className='card-content'>
                            <Link to = {'/' + post.id}>
                            <span className='card-title red-text'> {post.title}</span>
                            </Link>
                            <p>{post.body}</p>

                        </div>
                    </div>
                )
            })
        ) : (
                <div className='center'>No posts yet</div>
            )
        return (
            <div className='container home'>
                <h4 className='center'>Home</h4>
                {postsLink}

            </div >
        )
    }
}
const mapStateToProps = (state)=>{
return {
    posts:state.posts
}
}

export default connect (mapStateToProps)(Home)
