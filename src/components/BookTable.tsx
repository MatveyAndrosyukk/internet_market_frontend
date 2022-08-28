import React, {FC} from 'react';


const BookTable:FC = () => {
    return (
        <div className='book-section'>
            <div className='container'>
                <div className='book-section-line'>
                    <div className='book-section-text'>
                        <div className='book-section-text-big'>
                            Отпразднуйте в одном из
                            самых лучших ресторанов.
                        </div>
                        <div className='book-section-text-small'>
                            Только в этом месяце бизнес-ланч от 250 ₽
                        </div>
                    </div>
                    <div className='book-section-button'>
                        <a className='book-section-btn' href="#">ЗАКАЗ СТОЛИКА</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookTable;