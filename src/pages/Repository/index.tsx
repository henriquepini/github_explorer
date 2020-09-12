import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
	repository: string;
}

const Repository: React.FC = () => {
	const { params } = useRouteMatch<RepositoryParams>();

	return (
		<>
			<Header>
				<img src={logoImg} alt="github explorer's logo" />
				<Link to="/">
					<FiChevronLeft size={16} />
					Voltar
				</Link>
			</Header>

			<RepositoryInfo>
				<header>
					<img
						src="https://avatars3.githubusercontent.com/u/11811935"
						alt="Avatar"
					/>
					<div>
						<strong>henriquepini/be-the-hero</strong>
						<p>Repo description</p>
					</div>
				</header>
				<ul>
					<li>
						<strong>1808</strong>
						<span>Stars</span>
					</li>
					<li>
						<strong>48</strong>
						<span>Forks</span>
					</li>
					<li>
						<strong>67</strong>
						<span>Issues</span>
					</li>
				</ul>
			</RepositoryInfo>

			<Issues>
				<Link to="/">
					<div>
						<strong>henriquepini/be-the-hero</strong>
						<p>Omnistack&apos;s full app</p>
					</div>

					<FiChevronRight size={20} />
				</Link>
			</Issues>
		</>
	);
};

export default Repository;
