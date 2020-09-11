import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
	return (
		<>
			<img src={logoImg} alt="Github Explorer's logo" />
			<Title>Explore Github repositories.</Title>

			<Form action="">
				<input placeholder="Type the repository's name" />
				<button type="submit">Search</button>
			</Form>

			<Repositories>
				<a href="teste">
					<img
						src="https://avatars0.githubusercontent.com/u/11811935?s=460&u=089518eda2deacdb997457eb8a4fadeb5d8a6cb7&v=4"
						alt="Henrique Pini"
					/>
					<div>
						<strong>henriquepini/frete-pelo-cep</strong>
						<p>
							Este é um repositório simples para utilização de uma API para
							encontrar um endereço, dado o CEP.
						</p>
					</div>

					<FiChevronRight size={20} />
				</a>
			</Repositories>
		</>
	);
};

export default Dashboard;
