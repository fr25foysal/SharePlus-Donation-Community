
import { useReactTable,getCoreRowModel,flexRender } from '@tanstack/react-table'
import { useMemo } from 'react';
import PageTitle from '../../Components/PageTitle';
import WithContainer from '../../Components/WidthContainer/WithContainer';


  
const ManageFood = () => {
   
    const foodData = [
        {
            id: 1,
          FoodName: "Rice and Lentils",
          FoodImage: "https://i.ibb.co/DgvcHYY/food-3.jpg",
          FoodQuantity: "15",
          PickupLocation: "789 Oak Road, Villageton",
          ExpiredDate: "2023-12-10",
          AdditionalNotes: "Basmati rice and red lentils",
          DonatorImage: "https://i.ibb.co/kXNqTBH/donor-4.jpg",
          DonatorName: "Sarah Brown",
          DonatorEmail: "sarah@example.com",
          FoodStatus: "available"
        },
        {
            id: 2,
          FoodName: "Rice and Lentils",
          FoodImage: "https://i.ibb.co/DgvcHYY/food-3.jpg",
          FoodQuantity: "15",
          PickupLocation: "789 Oak Road, Villageton",
          ExpiredDate: "2023-12-10",
          AdditionalNotes: "Basmati rice and red lentils",
          DonatorImage: "https://i.ibb.co/kXNqTBH/donor-4.jpg",
          DonatorName: "Sarah Brown",
          DonatorEmail: "sarah@example.com",
          FoodStatus: "available"
        },
        {
            id: 3,
          FoodName: "Rice and Lentils",
          FoodImage: "https://i.ibb.co/DgvcHYY/food-3.jpg",
          FoodQuantity: "15",
          PickupLocation: "789 Oak Road, Villageton",
          ExpiredDate: "2023-12-10",
          AdditionalNotes: "Basmati rice and red lentils",
          DonatorImage: "https://i.ibb.co/kXNqTBH/donor-4.jpg",
          DonatorName: "Sarah Brown",
          DonatorEmail: "sarah@example.com",
          FoodStatus: "available"
        },
        
      ];

      const data = useMemo(
            ()=>foodData,
            []
        )
        

    const columns = [
        {
            Header: 'Name',
            accessorKey: 'FoodName',
          },
          {
            Header: 'Image',
            accessorKey: 'FoodImage',
          },
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
            accessorKey: 'Manage',
            renderValue: () => <h1>hi</h1>
          },
          {
            Header: 'Edit',
            accessorKey: 'Edit',
          },
          {
            Header: 'Delete',
            accessorKey: 'Delete',
          },
    ]
     
    const table = useReactTable({data,columns,getCoreRowModel: getCoreRowModel()})
    // console.log(data);
      
    return (
        <div>
            <PageTitle>SharePlus | Manage My Foods</PageTitle>

            <WithContainer>
                <div className='bg-secondary p-5 text-center'>
               <table>
            <thead>
                {
                    table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
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
                        <tr key={row.id}>
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