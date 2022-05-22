import { useRouter } from 'next/router';
import React from 'react';
import Button from '@mui/material/Button';

function GobackBtn() {
	const router = useRouter();

	return (
    <Button variant="outlined" onClick={() => router.back()}>
    뒤로가기
    </Button>
	);
}

export default GobackBtn;
