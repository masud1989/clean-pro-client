import React from 'react';
import bucketGirl from '../../assets/images/bucketgirl.png';

const Hero = () => {
    return (
        <div class="hero h-[60vh] bg-accent">
            <div class="hero-content flex-col lg:flex-row">
                <div>
                <p className='text-xl'>Best Quality</p>
                <h1 class="text-5xl font-bold">Professional Cleaning Service</h1>
                <p class="py-6 max-w-xl"> A Quick brown fox jumps over the lazy dog. A Quick brown fox jumps over the lazy dog. A Quick brown fox jumps over the lazy dog. A Quick brown fox jumps over the lazy dog. A Quick brown fox jumps over the lazy dog. A Quick brown fox jumps over the lazy dog. </p>
                <button class="btn btn-primary">Get Started</button>
                </div>
                <div className='h-[60vh] shrink-0'>
                    <img src={bucketGirl} className='h-full' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;