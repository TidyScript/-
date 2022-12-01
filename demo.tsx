import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Tree, Input, Divider, Table, Button } from 'antd';
import type { DataNode, DirectoryTreeProps } from 'antd/es/tree';

const { DirectoryTree } = Tree;
const { TextArea } = Input;

const treeData: DataNode[] = [
  {
    title: '制孔',
    key: '0',
    children: [
      { title: '初孔', key: '0-0', isLeaf: true },
      { title: '扩孔', key: '0-1', isLeaf: true },
      { title: '终孔', key: '0-2', isLeaf: true },
      { title: '锪窝', key: '0-3', isLeaf: true },
      { title: '引孔', key: '0-4', isLeaf: true },
    ],
  },
];

const App: React.FC = () => {
  const onSelect: DirectoryTreeProps['onSelect'] = (keys, info) => {
    console.log('Trigger Select', keys, info);
  };

  const onExpand: DirectoryTreeProps['onExpand'] = (keys, info) => {
    console.log('Trigger Expand', keys, info);
  };
  /*
"工序种类：制孔
工序类别：初孔
细分场景：需数模解析制孔材料是金属、碳纤维、玻璃纤维、金属碳纤叠层、金属玻纤叠层的哪一种"

style={{ marginLeft: '20px' }}
*/
  return (
    <div>
      <Divider>管理界面</Divider>
      <div
        style={{
          display: 'flex',
          flex: 'row',
        }}
      >
        <DirectoryTree
          selectedKeys={['0-0']}
          multiple
          defaultExpandAll
          onSelect={onSelect}
          onExpand={onExpand}
          treeData={treeData}
        />
        <Table
          style={{ flexGrow: '1' }}
          columns={[
            {
              title: '模板名称',
              dataIndex: 'i0',
              key: 'i0',
            },
            {
              title: '工序种类',
              dataIndex: 'i1',
              key: 'i1',
            },
            {
              title: '工序类别',
              dataIndex: 'i2',
              key: 'i2',
            },
            {
              title: '细分场景',
              dataIndex: 'i3',
              key: 'i3',
            },
            {
              title: '操作',
              key: 'i4',
              render: (e) => {
                return <Button size="small">编辑</Button>;
              },
            },
          ]}
          dataSource={[
            {
              key: '1',
              i0: '初孔001',
              i1: '制孔',
              i2: '初孔',
              i3: '金属',
            },
          ]}
        ></Table>
      </div>
      <Divider>模板编写界面</Divider>
      <div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <a>模板名称：</a>
          <div>
            <Input defaultValue="初孔001" />
          </div>
          <a style={{ marginLeft: '20px' }}>工序种类：</a>
          <a>制孔</a>
          <a style={{ marginLeft: '20px' }}>工序类别：</a>
          <a>初孔</a>
          <a style={{ marginLeft: '20px' }}>细分场景：</a>
          <div>
            <Input defaultValue="金属" />
          </div>
        </div>
        <div style={{ marginTop: '10px' }}>
          <TextArea
            rows={6}
            value="<选择工艺模板或选择螺栓线（通过螺栓线判断制孔层级）/>
按工程数模<选择工程数模/>，<可复制>使用<选择工装/>在<添加描述/><选择数模-螺栓线/>的初孔，孔径为<计算孔径/>，数量为<计算孔数量/>个<可复制/><制孔描述表/>。（合格证操作）
注：按工程数模5520C00001G24要求，前粱口盖处紧固件位置在圆弧上的相对位置不作特殊要求。
注1：可能产生的多余物类型：材料碎屑、润滑油油渍、胶带纸。
注2：多余物预防措施建议：采用裁剪合适的牛皮纸或塑料纸保护所要制孔区域，放好牛皮纸或塑料纸后用纸胶带粘结保护纸四周保证材料碎屑不会散落出保护区域；随手用吸尘包把工作区域打扫干净；油渍及时用抹布擦除；完成工作后随手清理，胶带纸等必须在工作完成后移除。
参见操作规程：CD0903 复材制孔（包含去毛刺）操作规程。"
          />
        </div>
        <div
          style={{
            height: '200px',
            marginTop: '20px',
            border: '1px solid black',
            padding: '10px',
          }}
        >
          <Button>{'选择工艺模板或选择螺栓线'}</Button>
          {'按工程数模'}
          <Button>{'选择工程数模'}</Button>
          {',使用'}
          <Button>{'选择工装'}</Button>
          {'在'}
          <Button>{'添加描述'}</Button>
          <Button>{'选择数模-螺栓线'}</Button>
          {'的初孔,孔径为'}
          <Button>{'10.5'}</Button>
          {'，数量为'}
          <Button>{'3'}</Button>
          {'个（合格证操作）'}
          <br />
          {
            '注：按工程数模5520C00001G24要求，前粱口盖处紧固件位置在圆弧上的相对位置不作特殊要求。'
          }
          <br />
          {
            '注2：多余物预防措施建议：采用裁剪合适的牛皮纸或塑料纸保护所要制孔区域，放好牛皮纸或塑料纸后用纸胶带粘结保护纸四周保证材料碎屑不会散落出保护区域；随手用吸尘包把工作区域打扫干净；油渍及时用抹布擦除；完成工作后随手清理，胶带纸等必须在工作完成后移除。'
          }
          <br />
          {'参见操作规程：CD0903 复材制孔（包含去毛刺）操作规程。'}
        </div>
      </div>
    </div>
  );
};

export default App;
