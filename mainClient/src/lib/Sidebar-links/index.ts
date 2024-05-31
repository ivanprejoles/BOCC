import { MdCreateNewFolder } from "react-icons/md";
import { IoNewspaperSharp } from "react-icons/io5";
import { GrTransaction } from "react-icons/gr";
import { MdManageSearch } from "react-icons/md";
import { BsListCheck } from "react-icons/bs";
import { IoIosSend } from "react-icons/io";
import { MdManageAccounts } from "react-icons/md";
import { GrAnnounce } from "react-icons/gr";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { Newspaper } from "lucide-react";

import Announcement from '@/dashboards/Admin/Announcement';
import News from '@/dashboards/Admin/News';
import Applicants from '@/dashboards/Board/Applicants';
import LoanApplication from '@/dashboards/Credit/LoanApplication';
import LoanCreation from '@/dashboards/Credit/LoanCreation';
import Transactions from '@/dashboards/Credit/Transactions';
import LoanPayment from '@/dashboards/Treasurer/LoanPayment';
import LoanTransactions from '@/dashboards/Treasurer/LoanTransactions';
import LoanStatus from '@/dashboards/Manager/LoanStatus';
import MemberManagement from '@/dashboards/Manager/MemberManagement';
import LoanManagement from '@/dashboards/Member/LoanManagement';
import ApplyLoan from '@/dashboards/Member/ApplyLoan';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const dashboards: {[key: string]: {title: string, pages: {[key: string]: any}[]}} = {
    admin: {
        title: 'Admin Dashboard',
        pages: [
            {
                title: 'Announcement',
                link: 'announcement',
                Icon: GrAnnounce,
                element: Announcement,
            },
            {
                title: 'News',
                link: 'News',
                Icon: Newspaper,
                element: News,
            },

        ]
    },
    board: {
        title: 'Board Member Dashboard',
        pages: [
            {
                title: 'Member Applicants',
                link: 'applicants',
                Icon: AiOutlineUsergroupAdd,
                element: Applicants,
            },
            {
                title: 'Transactions',
                link: 'board-transactions',
                Icon: GrTransaction,
                element: Transactions,
            },
        ]
    },
    credit: {
        title: 'Credit Dashboard',
        pages: [
            {
                title: 'Loan Applications',
                link: 'loan-application',
                Icon: IoNewspaperSharp,
                element: LoanApplication,
            },
            {
                title: 'Create Loan',
                link: 'create-loan',
                Icon: MdCreateNewFolder,
                element: LoanCreation,
            },
            {
                title: 'Transactions',
                link: 'transactions',
                Icon: GrTransaction,
                element: Transactions,
            },
        ]
    },
    treasurer: {
        title: 'Treasurer Dashboard',
        pages: [
            {
                title: 'Loan Payments', // can edit loan payments
                link: 'loan-payments',
                Icon: IoNewspaperSharp,
                element: LoanPayment,
            },
            {
                title: 'Loan Transactions', //can edit loans progression and status
                link: 'loan-transactions',
                Icon: GrTransaction,
                element: Transactions,
            },
        ]
    },
    manager: {
        title: 'Manager Dashboard',
        pages: [
            {
                title: 'Loan Status',
                link: 'loan-status',
                Icon: BsListCheck,
                element: LoanStatus
            },
            {
                title: 'Loan Applications',
                link: 'loan-applications',
                Icon: IoNewspaperSharp,
                element: LoanApplication
            },
            {
                title: 'Transactions',
                link: 'manager-transactions',
                Icon: GrTransaction,
                element: Transactions
            },
            {
                title: 'Member Management',
                link: 'member-management',
                Icon: MdManageAccounts,
                element: MemberManagement
            },
        ]
    },
    members: {
        title: 'Member Dashboard',
        pages: [
            {
                title: 'Loan Management',
                link: 'loan-management',
                Icon: MdManageSearch,
                element: LoanManagement
            },
            {
                title: 'Apply Loan',
                link: 'apply-loan',
                Icon: IoIosSend,
                element: ApplyLoan
            },
            {
                title: 'Loan Transaction',
                link: 'loan-transaction',
                Icon: GrTransaction,
                element: LoanTransactions
            },
        ]
    }
}

export default dashboards