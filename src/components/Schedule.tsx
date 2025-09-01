import React from "react";
import "../styles/schedule.css";

function Schedule() {
  return (
    <div className="main-frame">
      <div className="schedule-container">
        <div className="heading schedule-heading">
          <p className="heading-description">
            THE WEDDING DAY
          </p>
        </div>
        
        <div className="schedule-content">
          <div className="calendar-section">
            <div className="calendar-header">
              <div className="year">2025</div>
              <ul className="month-list">
                <li className="elevation-1">9</li>
                <li className="elevation-2">10</li>
                <li className="elevation-3">11</li>
                <li className="elevation-2">12</li>
                <li className="elevation-1">1</li>
              </ul>
            </div>
            
            <div className="calendar-table">
              <table>
                <thead>
                  <tr>
                    <th>일</th>
                    <th>월</th>
                    <th>화</th>
                    <th>수</th>
                    <th>목</th>
                    <th>금</th>
                    <th>토</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="wedding-day">
                      <span className="wedding-heart"></span>
                      <span className="wedding-date">1</span>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>10</td>
                    <td>11</td>
                    <td>12</td>
                    <td>13</td>
                    <td>14</td>
                    <td>15</td>
                  </tr>
                  <tr>
                    <td>16</td>
                    <td>17</td>
                    <td>18</td>
                    <td>19</td>
                    <td>20</td>
                    <td>21</td>
                    <td>22</td>
                  </tr>
                  <tr>
                    <td>23</td>
                    <td>24</td>
                    <td>25</td>
                    <td>26</td>
                    <td>27</td>
                    <td>28</td>
                    <td>29</td>
                  </tr>
                  <tr>
                    <td>30</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="event-details">
              <div className="event-time">
                2025.11.01 (토)<br/>
                오후 12시 30분
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
