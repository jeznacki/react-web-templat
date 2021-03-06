import React from 'react';
import BlogSidebar from '../blog/BlogSidebar';
import Breadcrumbs from '../global/components/Breadcrumbs';

import {
    useParams
} from "react-router-dom";



const Post = () => {

    let {category, slug} = useParams();

    return (

        <div>
            <header className={'page-head'}>
                <div className={'container'}>
                    <h1>Post Title</h1>
                </div>
            </header>
            <main className={'container'}>
                <Breadcrumbs />
                <div className={'row'}>
                    <div className={'col-md-8'}>
                        <PostSingle category={category} slug={slug} />
                    </div>
                    <div className={'col-md-4'}>
                        <BlogSidebar category={category} />
                    </div>
                </div>
            </main>
        </div>
    );

}

class PostSingle extends React.Component {

    //todo: jesli nie ma takeigo postu - 404???

    constructor(props) {
        super(props);
        this.category = this.props.category;
        this.slug = this.props.slug;
    }

    render() {


        return(
            <div>
                <b>Post category: {this.category} </b>
                <b>Post slug: {this.slug} </b>
                <p>Yey, you are wieving the post</p>
            </div>
        );


    }
}


export default Post;
