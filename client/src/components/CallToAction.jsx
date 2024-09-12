import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to learn more about JavaScript?
            </h2>
            <p className='text-gray-500 my-2'>
                Get my drive link to get the codes to learn JavaScript
            </p>
            <Button gradientDuoTone='purpleToPink' pill outline>
                <a href="https://drive.google.com/drive/folders/1YRMbPmuzmX9DOXk_fvXM7DXHUB3i3vnL?usp=drive_link" target='_blank' rel='noopener noreferrer'>
                Start Learning JavaScript with my Drive 
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://cdn.vectorstock.com/i/1000x1000/22/17/javascript-programming-language-vector-12502217.webp" />
        </div>
    </div>
  )
}