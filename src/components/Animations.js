import {Zoom as AwesomeZoom, Slide as AwesomeSlide, Bounce as AwesomeBounce} from 'react-awesome-reveal';

export function Zoom({children, ...rest}) {
    return <AwesomeZoom triggerOnce {...rest}>{children}</AwesomeZoom>
}

export function Slide({children, ...rest}) {
    return <AwesomeSlide triggerOnce {...rest}>{children}</AwesomeSlide>
}

export function Bounce({children, ...rest}) {
    return <AwesomeBounce triggerOnce {...rest}>{children}</AwesomeBounce>
}