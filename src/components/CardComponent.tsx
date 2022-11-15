
import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const CardComponent = () => {

    const header = (
        <img alt="Card" src="https://www.primefaces.org/primereact/images/usercard.png" />
    );
    const footer = (
        <span>
            <Button label="Save" icon="pi pi-check" />
            <Button label="Cancel" icon="pi pi-times" className="p-button-secondary ml-2" />
        </span>
    );

    return (
        <div className='grid m-2'>
            <div className="col-12 md:col-4">
                <Card title="Simple Card">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores sapiente, amet qui, ipsa accusantium temporibus rerum ea atque quia cupiditate placeat reprehenderit facilis, consectetur sequi iure fuga quidem incidunt eveniet.</p>
                </Card>
            </div>
            <div className="col-12 md:col-4">
                <Card title="Advanced Card with Header" subTitle="Sub Title" header={header} >
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, iure id quod culpa perspiciatis adipisci facilis ut reiciendis magni et in, fugiat vero voluptatibus perferendis iusto ipsum voluptate nemo nisi eos itaque cupiditate temporibus voluptates! Molestias, quo. Quae, non laborum?</p>
                </Card>
            </div>
            <div className="col-12 md:col-4">
                <Card title="Advanced Card with Footer" subTitle="Sub Title" footer={footer}>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, iure id quod culpa perspiciatis adipisci facilis ut reiciendis magni et in, fugiat vero voluptatibus perferendis iusto ipsum voluptate nemo nisi eos itaque cupiditate temporibus voluptates! Molestias, quo. Quae, non laborum?</p>
                </Card>
            </div>
        </div>
    )
}

export default CardComponent