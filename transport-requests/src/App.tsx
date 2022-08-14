import React, { useState, useEffect } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined, SnippetsFilled } from '@ant-design/icons'
import { Layout, Menu, Col, Row } from 'antd';
import { useResizable } from 'react-resizable-layout';
import { cn } from './app/utils/cn';
import SplitterLayout from './app/components/SplitterLayout';
import { ClaimPanel } from './app/components/RequestPanel';
import { MapPanel } from './app/components/MapPanel';

import './App.css'

import { useAppSelector, useAppDispatch } from './app/hooks';
import { useSelector, useDispatch } from 'react-redux';
import { setClaims } from './app/reducers/claimsSlice';

const App: React.FC = () => {
	const [collapsed, setCollapsed] = useState(true);
	const [isPanelChanged, setPanelChanged] = useState(false);
	const { Header, Sider, Content } = Layout;

	const {
		isDragging: isClaimPanelDragging,
		position: claimPanel,
		splitterProps: claimPanelDragBarProps
	} = useResizable({
		axis: "x",
		initial: 700,
		min: 0,
		onResizeEnd: () => setPanelChanged(true)
	});

	return (
		<Layout id="layout">
			{/* Side menu */}
			<Sider trigger={null} collapsible collapsed={collapsed}>
				<div className="logo" />

				<Menu
					theme="dark"
					mode="inline"
					defaultSelectedKeys={['1']}
					items={[
						{
							key: '1',
							icon: <SnippetsFilled />,
							label: 'Заявки',
						},
					]}
				/>
			</Sider>

			{/* Content block */}
			<Layout className="site-layout">
				{/* Control element that rotates the side menu */}
				<Header className="site-layout-background" style={{ padding: 0 }}>
					{React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
						className: 'trigger',
						onClick: () => setCollapsed(!collapsed),
					})}
				</Header>
				
				{/* Requests and map panel */}
				<Content className="site-layout-background">
					<div className={"flex flex-column font-mono overflow-hidden"}>
						<div className={"flex grow"}>
							<div className={cn("shrink-0 contents", isClaimPanelDragging && "dragging")} style={{ width: claimPanel }}>
								<ClaimPanel />
							</div>

							{/* Dynamic splitter */}
							<SplitterLayout isDragging={isClaimPanelDragging} {...claimPanelDragBarProps} />

							<div className={"flex grow"}>
								<div className={cn("shrink-0 contents", isClaimPanelDragging && "dragging")}>
									<MapPanel />
								</div>
							</div>
						</div>
					</div>
				</Content>
			</Layout>
		</Layout>
	);
};

export default App;

