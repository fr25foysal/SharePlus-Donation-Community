
import { useReactTable,getCoreRowModel,flexRender } from '@tanstack/react-table'
import { useEffect, useMemo, useState } from 'react';
import PageTitle from '../../Components/PageTitle';
import WithContainer from '../../Components/WidthContainer/WithContainer';
import axios from 'axios';
import useProvider from '../../Hooks/useProvider';
import { Link } from 'react-router-dom';
  
const ManageFood = () => {
  
  const {user,successNotify,errorNotify} = useProvider()
    const [foodData,setFoodData] = useState([])
   
    useEffect(()=>{
      axios.get(`/manage-foods?email=${user.email}`)
    .then(d=>setFoodData(d.data))

    },[])
      const data = useMemo(
            ()=>foodData,
            [foodData]
        )

        const handleManageClick = (rowData) => {
          console.log('Manage button clicked for row:', rowData);
        };  
        const handleDeleteClick = (rowData) => {
          axios.delete(`http://localhost:5000/manage/delete/${rowData}`)
          .then(()=>{
            successNotify('Food Deleted')
            const newFoods=() => foodData.filter(f=>f._id !==rowData) 
            setFoodData(newFoods)
        })
          .catch(e=>{
              console.error(e.message);
              errorNotify('Something went wrong!')
          })
        }
    const columns = [
        {
            Header: 'Name',
            accessorKey: 'FoodName',
          },
          // {
          //   Header: 'Image',
          //   accessorKey: 'FoodImage',
          //   cell: ({ row }) => (
          //    <img src="../../assets/images/feedothers.jpg" alt="" />
          //   ),
          // },
          {
            Header: 'Quantity',
            accessorKey: 'FoodQuantity',
          },
          {
            Header: 'Location',
            accessorKey: 'PickupLocation',
          },
          {
            Header: 'Expires',
            accessorKey: 'ExpiredDate',
            
          },
          {
            Header: 'Status',
            accessorKey: 'FoodStatus',
          },
          {
            Header: 'Manage',
            accessorKey:  "manage",
            cell: ({ row }) => (
              <Link to={`/manage/${row.original._id}`} className='bg-black p-4'>Manage</Link>
            ),
          },
          {
            Header: 'Edit',
            accessorKey: 'Edit',
            cell: ({row})=>(
              <Link to={`/update-food/${row.original._id}`} className='bg-black p-4'>Edit</Link>
            )
            
          },
          {
            Header: 'Delete',
            accessorKey: 'Delete',
            cell: ({row})=>(
              <button onClick={()=>handleDeleteClick(row.original._id)} className='bg-black p-4'>Delete</button>
            )
          },
    ]
     
    const table = useReactTable({data,columns,getCoreRowModel: getCoreRowModel()})
    // console.log(data);
      
    return (
        <div>
            <PageTitle>SharePlus | Manage My Foods</PageTitle>

            <WithContainer>
                <div className='bg-secondary p-5 text-center'>
               <table className='mx-auto'>
            <thead>
                {
                    table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id} className='bg-white'>
                            {headerGroup.headers.map(header => <th key={header.id}>
                                {
                                    flexRender(
                                        header.column.columnDef.header, header.getContext()
                                    )
                                }
                            </th>)}
                        </tr>
                    ))
                }
            </thead>
            <tbody>
                {
                    table.getRowModel().rows.map( row =>(
                        <tr className='bg-neutral' key={row.id}>
                            {
                                row.getVisibleCells().map(cell =>(
                                    <td key={cell.id}>
                                        {
                                            flexRender(cell.column.columnDef.cell,cell.getContext())
                                        }
                                        
                                    </td>
                                ))
                            }
                        </tr>
                        
                    ))
                }
            </tbody>
         </table>  </div>
            </WithContainer>
        
        </div>
    );
};

export default ManageFood;