import React from 'react';

const Zaivka = () => {
return (
	<div className="obj">
	<div className="list2">
    <div className="warp2">
	
	
	<div className="container">
		<h3>Вопросы</h3>
		<div className="cont3">
		<div className='povorot2'>
		<label form="goal">Цель обращения</label>
		<input type="text" id="goal" className="goal"/>
		</div>
		<div className='povorot2'>
		<label form="goal">Как вы провели этот день в этом году?</label>
		<input type="text" id="goal" className="goal"/>
		</div>
		<div className='povorot2'>
		<label form="goal">Интересно, какой самый длинный вопрос на этом проекте? С учётом всех-всех дополнений...
Ведь 4000 символов для</label>
		<input type="text" id="goal" className="goal"/>
		</div>
		<div className='povorot4'>
		<button type="submit">Отправить</button>
		</div></div>
	</div>
	</div>
	</div>
	</div>
	
);
};

export default Zaivka;
