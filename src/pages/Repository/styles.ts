import styled from 'styled-components';

export const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;

	a {
		display: flex;
		align-items: center;
		text-decoration: none;
		color: #a8a8b3;
		transition: color 0.2s;

		&:hover {
			color: #666;
		}

		svg {
			margin-right: 4px;
		}
	}
`;

export const RepositoryInfo = styled.section`
	margin-top: 80px;

	header {
		display: flex;
		align-items: center;
		justify-content: space-between;

		img {
			width: 120px;
			height: 120px;
			border-radius: 50%;
		}

		a {
			display: flex;
			align-items: center;
			justify-content: center;
			text-decoration: none;
			font-weight: bold;
			background-color: #04d361;
			color: #fff;
			width: 210px;
			height: 70px;
			border-radius: 5px;
			transition: background-color 0.2s;

			&:hover {
				background-color: #03bd57;
			}
		}

		div {
			margin-left: 24px;

			strong {
				font-size: 36px;
				color: #3d3d4d;
			}

			p {
				font-size: 18px;
				color: #737380;
				margin-top: 4px;
			}
		}
	}

	ul {
		display: flex;
		list-style: none;
		margin-top: 40px;

		li {
			& + li {
				margin-left: 80px;
			}

			strong {
				display: block;
				font-size: 36px;
				color: #3d3d4d;
			}

			span {
				display: block;
				margin-top: 4px;
				color: #6c6c80;
			}
		}
	}
`;

export const Issues = styled.div`
	margin-top: 50px;

	a {
		background: #fff;
		border-radius: 5px;
		width: 100%;
		padding: 24px;
		display: block;
		text-decoration: none;
		display: flex;
		align-items: center;
		transition: transform 0.5s;

		& + a {
			margin-top: 16px;
		}

		&:hover {
			transform: translateX(10px);
		}

		div {
			flex: 1;
			margin: 0 16px;

			strong {
				font-size: 20px;
				color: #3d3d4d;
			}

			p {
				font-size: 18px;
				color: #a8a8b3;
				margin-top: 4px;
			}
		}

		svg {
			margin-left: auto;
			color: #cbcbd6;
		}
	}
`;
