import {
    trigger,
    state,
    style,
    animate,
    transition,
    AnimationMetadata
} from '@angular/animations';

export const animacion: AnimationMetadata =

    trigger('AfuerAdentro', [

        state('*', style({
            transform: 'translateY(0%)',
            opacity: 1
        })),


        transition(':enter', [
            style({
                transform: 'translateY(20%)',
                opacity: 0
            }),
            animate('0.8s ease-in')
        ]),

        
        transition(':leave', [
            
            animate('0.3s ease-out', style({
                opacity: 0,
                transform: 'translateY(-100%)'
            })),

        ]),
        
    ]);