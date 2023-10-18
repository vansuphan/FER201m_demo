import React from 'react'
import workImage from '../../asserts/image/workTogether.png'
import star from '../../asserts/icon/Vector.png'
import style from '../card/Card.module.scss'

export default function Card(props) {

    const {
        urlImg = workImage,
        title = 'Learn marketing From Top Instructors',
        rating = 4.5,
        numWeek = 6,
        numStudent = '1.5k',
        price = '30.5$'
    } = props

    function formatNumber(number) {
        if (number >= 1000) {
          return (number / 1000).toFixed(1) + 'k';
        } else {
          return number.toString();
        }
    }

    return (
        <div className={style['card']}>
            <img className={style['image-main']} src={urlImg} alt='img-work'/>
            <div className={style['card-content']}>
                <div className={style['title']}>
                    <p>{title}</p>
                    <div className={style['rating']}>
                        <img src={star} alt='star'/>
                        <div>{rating}</div>
                    </div>
                </div>
                <div className={style['number']}>
                    <div className={style['week']}>{`${numWeek} weeks`}</div>
                    <div className={style['student']}>
                        <i className="fa-solid fa-user-group"></i>
                        {`${formatNumber(numStudent)} Students`}
                    </div>
                    <div className={style['price']}>{price}</div>
                </div>
            </div>
        </div>
    )
}
