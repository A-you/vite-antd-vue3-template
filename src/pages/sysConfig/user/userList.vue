<!--
 * @Author: ymy
 * @Date: 2021-11-10 12:53:14
 * @LastEditors: ymy
 * @LastEditTime: 2021-11-10 16:06:20
-->
<template>
  <a-table
    :dataSource="dataSource"
    :columns="columns"
  ></a-table>
</template>

<script>
export default {
  setup () {
    const dataSource = [
      {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
      },
      {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
      }
    ];

    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      },
    ]

    return {
      dataSource,
      columns
    }
  }
}
</script>

<style lang="scss" scoped>
</style>