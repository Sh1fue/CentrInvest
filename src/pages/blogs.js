import React from 'react';
function Blogs() {
	return (
		<div className="obj">
			<div className="list2">
				<div className="warp2">

					<div className="container">
						<h3>Личные данные</h3>
						<div className="cont2">
							<div className='povorot'>
								<label form="first_name">Фамилия</label>
								<input type="text" id="first_Name" className="first_name" />
							</div>
							<div className='povorot'>
								<label form="last_name">Имя</label>
								<input type="text" id="last_name" className="last_name" />
							</div>
							<div className='povorot'>
								<label form="otchestvo">Отчество</label>
								<input type="text" id="otchestvo" className="otchestvo" />
							</div>
							<div className='povorot'>
								<label form="dob">Дата рождения:</label>
								<input type="date" id="dob" className="dob" />
							</div>
						</div>
					</div>

					<div className="container">
						<h3>Контактные данные</h3>
						<div className="cont2">
							<div className='povorot'>
								<label form="phone">Номер телефона</label>
								<input type="tel" id="phone" className="phone" />
							</div>
							<div className='povorot'>
								<label form="email">Электронная почта</label>
								<input type="email" id="email" className="email" />
							</div>
						</div>
					</div>

					<div className="container">
						<h3>Информация о</h3>
						<div className="cont3">
							<div className='povorot2'>
								<label form="goal">Цель обращения</label>
								<input type="text" id="goal" className="goal" />
							</div>
							<div className='povorot2'>
								<label form="practice">Сроки практики</label>
								<input type="date" id="practice" className="practice" />
								<span>-</span>
								<input type="dates" id="practice" className="practice" />
							</div>
							<form action='zaivka'>
								<button type="submit" >Отправить</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Blogs;