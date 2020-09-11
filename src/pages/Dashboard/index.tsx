import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

interface Repository {
	full_name: string;
	description: string;
	owner: {
		login: string;
		avatar_url: string;
	};
}

const Dashboard: React.FC = () => {
	const [newRepo, setNewRepo] = useState('');
	const [repositories, setRepositories] = useState<Repository[]>([]);

	async function handleAddNewRepository(
		e: FormEvent<HTMLFormElement>,
	): Promise<void> {
		e.preventDefault();
		const response = await api.get<Repository>(`repos/${newRepo}`);

		const repository = response.data;

		setRepositories([...repositories, repository]);
		setNewRepo('');
	}
	return (
		<>
			<img src={logoImg} alt="Github Explorer's logo" />
			<Title>Explore Github repositories.</Title>

			<Form onSubmit={handleAddNewRepository}>
				<input
					value={newRepo}
					onChange={e => setNewRepo(e.target.value)}
					placeholder="Type the repository's name"
				/>
				<button type="submit">Search</button>
			</Form>

			<Repositories>
				{repositories.map(repo => (
					<a key={repo.full_name} href="teste">
						<img src={repo.owner.avatar_url} alt={repo.owner.login} />
						<div>
							<strong>{repo.full_name}</strong>
							<p>{repo.description}</p>
						</div>

						<FiChevronRight size={20} />
					</a>
				))}
			</Repositories>
		</>
	);
};

export default Dashboard;
