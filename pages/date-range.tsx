/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Main } from './index';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import { ko } from 'date-fns/locale';
import { addDays, endOfDay, startOfDay, addMonths, isSameDay } from 'date-fns';
import styled from '@emotion/styled';
import { Button } from '@mui/material';
import GobackBtn from './components/common/GobackBtn';

const DateRangeWrapper = styled(Main)`
  position: relative;
  justify-content: flex-start;
  padding: 50px;
`;

const Header = styled.header`
  width: 600px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const CustomDateRange = styled(DateRangePicker)`
  position: absolute;
  top: 100px;
  display: flex;
  flex-direction: column-reverse;
  .rdrInputRanges,
  .rdrDateDisplayWrapper,
  .rdrMonthAndYearPickers {
    display: none;
  }
  .rdrDefinedRangesWrapper {
    width: 600px;
  }
  .rdrStaticRanges {
    width: 100%;
    flex-direction: row;
  }
  .rdrMonthAndYearWrapper {
    align-items: unset;
    height: 0px;
    padding-top: 0px;
  }

  .rdrNextPrevButton {
    margin-top: 5px;
    background-color: transparent !important;
  }
  .rdrDayToday .rdrDayNumber span {
    &:after {
      bottom: 10px;
    }
  }
  .rdrMonthName {
    text-align: center;
  }
  .rdrMonth {
    width: 280px !important;
  }
  .rdrDay {
    width: 40px !important;
    height: 40px !important;
  }
  .rdrSelected,
  .rdrInRange,
  .rdrStartEdge,
  .rdrEndEdge {
    top: 3px;
    bottom: 3px;
  }
  .rdrDayHovered {
    border-radius: 50%;
    /* background-color: red; */
  }
  .rdrDayNumber {
    top: 0px;
    bottom: 0px;
  }
  .rdrInRange {
    background-color: #9e9e9e;
  }
  .rdrEndEdge {
    background-color: #9e9e9e;
    right: 3px;
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
  }
  .rdrStartEdge {
    background-color: #9e9e9e;
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
    left: 3px;
  }
  .rdrDayInPreview {
    border-top: 1px solid #9e9e9e;
    border-bottom: 1px solid #9e9e9e;
  }
  .rdrDayStartPreview {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
    left: 3px;
    border-left: 1px solid #9e9e9e;
    border-top: 1px solid #9e9e9e;
    border-bottom: 1px solid #9e9e9e;
  }

  .rdrDayEndPreview {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
    right: 3px;
    border-right: 1px solid #9e9e9e;
    border-top: 1px solid #9e9e9e;
    border-bottom: 1px solid #9e9e9e;
  }
  .rdrDayStartPreview,
  .rdrDayInPreview,
  .rdrDayEndPreview {
    top: 3px !important;
    bottom: 3px !important;
  }

  .rdrDayEndOfMonth,
  .rdrDayEndOfWeek {
    .rdrDayInPreview,
    .rdrDayStartPreview {
      right: 3px !important;
    }
    .rdrDayStartPreview {
      left: 3px !important;
    }
  }
  .rdrDayEndOfMonth,
  .rdrDayEndOfWeek {
    .rdrInRange,
    .rdrStartEdge {
      border-top-right-radius: 50% !important;
      border-bottom-right-radius: 50% !important;
      right: 3px;
    }
  }
  .rdrDayStartOfMonth,
  .rdrDayStartOfWeek {
    .rdrInRange,
    .rdrEndEdge {
      border-top-left-radius: 50% !important;
      border-bottom-left-radius: 50% !important;
      left: 3px;
    }
  }

  .rdrDayEndOfMonth,
  .rdrDayEndOfWeek {
    .rdrInRange,
    .rdrStartEdge {
      right: 3px;
    }
  }

  .rdrDayStartOfMonth,
  .rdrDayStartOfWeek {
    .rdrDayInPreview,
    .rdrDayEndPreview {
      left: 3px;
      border-top: 1px solid #9e9e9e;
      border-bottom: 1px solid #9e9e9e;
      border-left: 1px solid #9e9e9e;
    }
    .rdrDayEndPreview {
      border-right: 1px solid #9e9e9e;
    }
  }

  .rdrDayEndOfMonth,
  .rdrDayEndOfWeek {
    .rdrDayInPreview,
    .rdrDayStartPreview {
      right: 3px;
      border-top: 1px solid #9e9e9e;
      border-bottom: 1px solid #9e9e9e;
      border-right: 1px solid #9e9e9e;
    }
    .rdrDayStartPreview {
      border-left: 1px solid #9e9e9e;
    }
  }
`;
const defineds = {
  startOfToday: startOfDay(new Date()),
  endOfToday: endOfDay(new Date()),
  endOfWeek: startOfDay(addDays(new Date(), 7)),
  endOfMonth: startOfDay(addMonths(new Date(), 1)),
};

const staticRangeHandler = {
  range: () => ({
    startDate: defineds.startOfToday,
    endDate: defineds.endOfToday,
  }),
  isSelected(range: { startDate: number | Date; endDate: number | Date }) {
    const definedRange = this.range();
    return (
      isSameDay(range.startDate, definedRange.startDate) &&
      isSameDay(range.endDate, definedRange.endDate)
    );
  },
};

export function createStaticRanges(ranges: any[]) {
  return ranges.map((range: any) => ({ ...staticRangeHandler, ...range }));
}

export const defaultStaticRanges = createStaticRanges([
  {
    label: '오늘',
    range: () => ({
      startDate: defineds.startOfToday,
      endDate: defineds.endOfToday,
    }),
  },
  {
    label: '1주',
    range: () => ({
      startDate: defineds.startOfToday,
      endDate: defineds.endOfWeek,
    }),
  },
  {
    label: '1달',
    range: () => ({
      startDate: defineds.startOfToday,
      endDate: defineds.endOfMonth,
    }),
  },
]);

function DateRange() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const [datePickerStatus, setDatePickerStatus] = useState(false);

  const handleSelectDate = (item: any) => {
    setState([item.selection]);
  };
  return (
    <DateRangeWrapper>
      <Header>
        <GobackBtn />
        <Button onClick={() => setDatePickerStatus(!datePickerStatus)}>open</Button>
      </Header>
      {datePickerStatus && (
        <CustomDateRange
          className="my-demo"
          onChange={handleSelectDate}
          moveRangeOnFirstSelection={false}
          ranges={state}
          months={2}
          locale={ko}
          direction="horizontal"
          showMonthAndYearPickers={false}
          monthDisplayFormat="yyyy년 MMM"
          staticRanges={[...defaultStaticRanges]}
        />
      )}
    </DateRangeWrapper>
  );
}

export default DateRange;
