import React from 'react';
import S from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark} from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const Banner4 = () => {
    return (
        <S.BannerContainer>
            <S.BannerWrapper id='banner4_wrapper'>
                <Link to={'/'}><FontAwesomeIcon icon={faCircleXmark} className='faCircleXmark'/></Link>
                <S.BannerImageBox>
                    <img src={process.env.PUBLIC_URL+"/images/banner/banner4.svg"} />
                    <div id='banner4_text'>마음이 불안해서 너무 힘들어요</div>
                </S.BannerImageBox>
                <S.BannerConBox>
                    <div>인간은 불안을 가지고 살아가요.<br/>불안감정은 인간이 생존에 저해되는 위험을 감지하고 대처할 수 있도록 도와 주는 감정이에요. <br/>하지만 마음이 불안할 때가 빈번하고 과도하거나 오래 지속될 때에는 기능저하가 일어나고 삶에 안정감을 잃게 되며 불행감이 심해지기에 잘 관리되어야 할 감정이기도 해요.</div>
                    <div><br/>나는 불안 정도가 얼마나 높은 사람일까요? 아래 항목을 보고 확인해 보세요!<br/></div>
                    <S.banner4_ImageWrapper>
                        <br/><img src={process.env.PUBLIC_URL+"/images/banner/banner4_img.png"}/>
                    </S.banner4_ImageWrapper>
                    <div><br/>만일 본인이 범불안장애에 해당하는 것 같다면 정신건강 전문가의 도움을 받으시길 추천해요. </div>
                    <div><br/>정도가 아주 높지 않고 혼자서 극복할 수 있는 일상적인 불안에 대해서는 어떻게 대처하면 좋을까요?</div>
                    <br/><div className='TitleText'>불안을 대처하는 법</div>
                    <S.banner4_textWrapper>
                        <div className='boldText'> 1. 불안 감정에 대해서 수용적인 태도 가지기</div>
                        <div>불안은 나쁜 것이 아니라 자연스러운 것이며 생존을 위해 필요한 감정입니다. 불안을 느끼는 것이 불편하지만 내가 해결해야 할 중요한 일들을 알려 주는 신호라고 생각하시고 불안 감정을 편안히 받아들이는 연습을 해보시길 바라요.</div>

                        <div className='boldText'><br/> 2. 불안 탐색하기</div>
                        <div>마음이 불안할 때 마음을 깊이 성찰해 보시기 바라요. 불안을 느끼는 것에는 분명히 이유가 있기 때문이에요. 자신의 불안 목록을 작성해 보는 것도 도움이 될 거예요. 자신이 느끼는 막연한 불안을 자각하는 것만으로도 마음이 편해지실 거예요.</div>
                    
                        <div className='boldText'><br/> 3. 마음 비우기</div>
                        <div>마음이 불안할 때 해결되지 못할 내용이 있다면 이를 수용해야 합니다. 예를 들어, 노력해도 뜻대로 되지 않거나 능력 밖의 일에 대해서 계속 불안을 가지고 해결하려고 노력하지 말고 포기하세요. 자신의 한계를 받아들이면 마음이 편합니다. 최선의 노력을 했는데도 안 되는 일에 마음을 쓰는 일은 욕심이라고 할 수 있어요. 마음을 비우면 불안 스트레스에서 벗어날 수 있어요.</div>
                    
                        <div className='boldText'><br/> 4. 자신의 스트레스 해소법 가지기</div>
                        <div>자신의 기질이나 성격, 취향에 따라 해소법이 다를 수 있어요. 가장 기본적이고 보편적인 인간의 해소법은 '말하기'에요. 신뢰하는 사람과의 대화를 통해 자신의 마음을 털어놓고 공감받는다면 큰 힘이 될 수 있어요. 이외에 마음이 불안할 때, 감정을 다스리기 위한 호흡이나 명상, 운동, 취미생활 등을 하는 것도 불안과 스트레스를 해소하는 데 매우 큰 도움이 될 거예요. 자신에게 꼭 맞는 스트레스 해소법을 찾아서 하루빨리 불안한 마음이 잠재워지길 바라요!</div>
                    </S.banner4_textWrapper>
                </S.BannerConBox>
            </S.BannerWrapper>
        </S.BannerContainer>
    );
};

export default Banner4;