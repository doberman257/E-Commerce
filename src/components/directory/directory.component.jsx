import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';


class Directory extends React.Component {
    constructor(){
        super();

        this.state = {
            sections: [
                {
                    id: 1,
                    title: 'Skateboard',
                    imageUrl: 'https://cdn.pixabay.com/photo/2016/01/19/18/02/skateboards-1150036__340.jpg',
                    LinkUrl: 'skateboard'
                },
                {
                    id: 2,
                    title: 'Sneakers',
                    imageUrl: 'https://cdn.pixabay.com/photo/2018/04/11/23/33/foot-3312140__340.jpg',
                    LinkUrl: 'sneakers'
                },
                {
                    id: 3,
                    title: 'Running',
                    imageUrl: 'https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619__340.jpg',
                    LinkUrl: 'running'
                },
                {
                    id: 4,
                    title: 'Men',
                    imageUrl: 'https://cdn.pixabay.com/photo/2016/02/19/10/56/hip-hop-1209499__340.jpg',
                    LinkUrl: 'men',
                    size: 'large'
                },
                {
                    id: 5,
                    title: 'woman',
                    imageUrl: 'https://cdn.pixabay.com/photo/2018/05/06/03/39/woman-3377839__340.jpg',
                    LinkUrl: 'skateboard',
                    size: 'large'
                },
            ]
        }
    }

    render(){
        return(
            <div className='directory-menu'>
                 {this.state.sections.map(({id, ...otherProps}) => (
                    <MenuItem key={id} {...otherProps}/>
                ))}
            </div> 
        )
    }
}

export default Directory;